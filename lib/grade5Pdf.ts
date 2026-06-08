export type Grade5PdfLimit = 10 | 15 | 20;

export type Grade5PdfQuestion = {
  id?: string;
  prompt: string;
  options: string[];
  correct: number;
  imageUrl?: string;
};

export type GenerateGrade5PdfParams = {
  subjectId: string;
  subjectLabel: string;
  testNo: number;
  questions: Grade5PdfQuestion[];
  limit: Grade5PdfLimit;
};

type JsPdfInstance = {
  addFileToVFS: (fileName: string, fontData: string) => void;
  addFont: (postScriptName: string, fontName: string, fontStyle: string) => void;
  addImage: (imageData: string, format: string, x: number, y: number, width: number, height: number) => void;
  addPage: () => void;
  getNumberOfPages: () => number;
  line: (x1: number, y1: number, x2: number, y2: number) => void;
  save: (fileName: string) => void;
  setDrawColor: (...args: number[]) => void;
  setFont: (fontName: string, fontStyle?: string) => void;
  setFontSize: (size: number) => void;
  setLineWidth: (width: number) => void;
  setPage: (pageNumber: number) => void;
  setTextColor: (...args: number[]) => void;
  splitTextToSize: (text: string, maxWidth: number) => string[];
  text: (text: string | string[], x: number, y: number, options?: { align?: 'center' | 'left' | 'right' }) => void;
};

type JsPdfConstructor = new (options: { orientation: 'portrait'; unit: 'mm'; format: 'a4' }) => JsPdfInstance;

declare global {
  interface Window {
    jspdf?: { jsPDF?: JsPdfConstructor };
  }
}

const TURKISH_FONT_NAME = 'DejaVuSans';
const TURKISH_FONT_REGULAR_FILE = 'DejaVuSans.ttf';
const TURKISH_FONT_BOLD_FILE = 'DejaVuSans-Bold.ttf';
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];
const PAGE = {
  marginX: 16,
  marginTop: 18,
  marginBottom: 18,
  width: 210,
  height: 297,
};

const normalizeTextForPdf = (text: string) =>
  (text || '')
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

export const slugifyGrade5PdfPart = (value: string) =>
  value
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'test';

const blobToDataUrl = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error ?? new Error('Görsel okunamadı.'));
    reader.readAsDataURL(blob);
  });

const loadImageDataUrl = async (imageUrl: string) => {
  const response = await fetch(imageUrl);
  if (!response.ok) throw new Error(`Görsel yüklenemedi: ${response.status}`);
  const blob = await response.blob();
  return blobToDataUrl(blob);
};

const getImageSize = (dataUrl: string) =>
  new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth || img.width, height: img.naturalHeight || img.height });
    img.onerror = () => reject(new Error('Görsel boyutu okunamadı.'));
    img.src = dataUrl;
  });

const getImageFormat = (dataUrl: string) => {
  const match = dataUrl.match(/^data:image\/(png|jpeg|jpg|webp);/i);
  const format = match?.[1]?.toLowerCase();
  if (format === 'jpg' || format === 'jpeg') return 'JPEG';
  if (format === 'webp') return 'WEBP';
  return 'PNG';
};

const setTurkishFont = (doc: JsPdfInstance, style: 'normal' | 'bold' | 'italic' | 'bolditalic' = 'normal') => {
  doc.setFont(TURKISH_FONT_NAME, style);
};

export const registerTurkishFont = async (doc: JsPdfInstance) => {
  const { DEJAVU_SANS_BOLD_BASE64, DEJAVU_SANS_REGULAR_BASE64 } = await import('./grade5Fonts');

  doc.addFileToVFS(TURKISH_FONT_REGULAR_FILE, DEJAVU_SANS_REGULAR_BASE64);
  doc.addFileToVFS(TURKISH_FONT_BOLD_FILE, DEJAVU_SANS_BOLD_BASE64);
  doc.addFont(TURKISH_FONT_REGULAR_FILE, TURKISH_FONT_NAME, 'normal');
  doc.addFont(TURKISH_FONT_BOLD_FILE, TURKISH_FONT_NAME, 'bold');
  doc.addFont(TURKISH_FONT_REGULAR_FILE, TURKISH_FONT_NAME, 'italic');
  doc.addFont(TURKISH_FONT_BOLD_FILE, TURKISH_FONT_NAME, 'bolditalic');
  setTurkishFont(doc);
};

const addFooter = (doc: JsPdfInstance) => {
  const pageCount = doc.getNumberOfPages();
  setTurkishFont(doc);
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    doc.setPage(pageNumber);
    doc.text(`${pageNumber} / ${pageCount}`, PAGE.width / 2, PAGE.height - 8, { align: 'center' });
  }
};

const drawHeader = (doc: JsPdfInstance, title: string) => {
  setTurkishFont(doc, 'bold');
  doc.setFontSize(16);
  doc.setTextColor(30, 41, 59);
  doc.text(title, PAGE.marginX, PAGE.marginTop);

  doc.setDrawColor(99, 102, 241);
  doc.setLineWidth(0.6);
  doc.line(PAGE.marginX, PAGE.marginTop + 5, PAGE.width - PAGE.marginX, PAGE.marginTop + 5);
};

const ensureSpace = (doc: JsPdfInstance, cursorY: number, neededHeight: number, title: string) => {
  if (cursorY + neededHeight <= PAGE.height - PAGE.marginBottom) return cursorY;

  doc.addPage();
  drawHeader(doc, title);
  return PAGE.marginTop + 14;
};

const addWrappedText = (
  doc: JsPdfInstance,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) => {
  const lines = doc.splitTextToSize(normalizeTextForPdf(text), maxWidth) as string[];
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
};

const addQuestionImage = async (
  doc: JsPdfInstance,
  imageUrl: string,
  cursorY: number,
  title: string,
) => {
  try {
    const dataUrl = await loadImageDataUrl(imageUrl);
    const size = await getImageSize(dataUrl);
    const maxWidth = PAGE.width - PAGE.marginX * 2 - 8;
    const maxHeight = 62;
    const ratio = Math.min(maxWidth / size.width, maxHeight / size.height, 1);
    const imageWidth = size.width * ratio;
    const imageHeight = size.height * ratio;

    let nextY = ensureSpace(doc, cursorY, imageHeight + 8, title);
    doc.addImage(dataUrl, getImageFormat(dataUrl), PAGE.marginX + 4, nextY, imageWidth, imageHeight);
    nextY += imageHeight + 7;
    return nextY;
  } catch {
    let nextY = ensureSpace(doc, cursorY, 8, title);
    setTurkishFont(doc, 'italic');
    doc.setFontSize(9);
    doc.setTextColor(148, 85, 0);
    doc.text('Not: Soru görseli PDF’ye eklenemedi.', PAGE.marginX + 4, nextY);
    return nextY + 7;
  }
};

const addAnswerKeyPage = (doc: JsPdfInstance, selectedQuestions: Grade5PdfQuestion[], title: string) => {
  doc.addPage();
  drawHeader(doc, title);

  setTurkishFont(doc, 'bold');
  doc.setFontSize(18);
  doc.setTextColor(30, 41, 59);
  doc.text('Cevap Anahtarı', PAGE.marginX, PAGE.marginTop + 20);

  doc.setFontSize(12);
  const startY = PAGE.marginTop + 34;
  const columnWidth = 42;
  const rowHeight = 10;
  const columns = 4;

  selectedQuestions.forEach((question, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const x = PAGE.marginX + column * columnWidth;
    const y = startY + row * rowHeight;
    const answerLetter = OPTION_LETTERS[question.correct] ?? '-';

    setTurkishFont(doc, 'bold');
    doc.setTextColor(79, 70, 229);
    doc.text(`${index + 1}.`, x, y);
    doc.setTextColor(15, 23, 42);
    doc.text(answerLetter, x + 11, y);
  });
};

const loadJsPdf = () =>
  new Promise<JsPdfConstructor>((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('PDF sadece tarayıcıda oluşturulabilir.'));
      return;
    }

    const currentJsPdf = window.jspdf?.jsPDF;
    if (currentJsPdf) {
      resolve(currentJsPdf);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-grade5-jspdf]');
    const script = existingScript ?? document.createElement('script');

    script.onload = () => {
      const loadedJsPdf = window.jspdf?.jsPDF;
      if (loadedJsPdf) {
        resolve(loadedJsPdf);
      } else {
        reject(new Error('jsPDF yüklenemedi.'));
      }
    };
    script.onerror = () => reject(new Error('jsPDF dosyası yüklenemedi.'));

    if (!existingScript) {
      script.src = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js';
      script.async = true;
      script.dataset.grade5Jspdf = 'true';
      document.head.appendChild(script);
    }
  });

export const generateGrade5TestPdf = async ({
  subjectId,
  subjectLabel,
  testNo,
  questions,
  limit,
}: GenerateGrade5PdfParams) => {
  const jsPDF = await loadJsPdf();
  const selectedQuestions = questions.slice(0, Math.min(limit, questions.length));
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  await registerTurkishFont(doc);
  const title = `5. Sınıf ${subjectLabel} Test ${testNo}`;

  drawHeader(doc, title);

  setTurkishFont(doc);
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`${selectedQuestions.length} soru`, PAGE.marginX, PAGE.marginTop + 12);

  let cursorY = PAGE.marginTop + 24;
  const textWidth = PAGE.width - PAGE.marginX * 2;

  for (const [index, question] of selectedQuestions.entries()) {
    cursorY = ensureSpace(doc, cursorY, 22, title);

    setTurkishFont(doc, 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    cursorY = addWrappedText(doc, `${index + 1}. ${question.prompt}`, PAGE.marginX, cursorY, textWidth, 5.5) + 3;

    if (question.imageUrl) {
      cursorY = await addQuestionImage(doc, question.imageUrl, cursorY, title);
    }

    setTurkishFont(doc);
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);

    for (const [optionIndex, option] of question.options.slice(0, 4).entries()) {
      cursorY = ensureSpace(doc, cursorY, 9, title);
      cursorY = addWrappedText(
        doc,
        `${OPTION_LETTERS[optionIndex]}) ${option}`,
        PAGE.marginX + 5,
        cursorY,
        textWidth - 8,
        5,
      ) + 1.5;
    }

    cursorY += 5;
  }

  addAnswerKeyPage(doc, selectedQuestions, title);
  addFooter(doc);

  const fileName = `5-sinif-${slugifyGrade5PdfPart(subjectId || subjectLabel)}-test-${testNo}-${selectedQuestions.length}-soru.pdf`;
  doc.save(fileName);
};
