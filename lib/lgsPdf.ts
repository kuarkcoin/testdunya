import { registerTurkishFont, slugifyGrade5PdfPart } from './grade5Pdf';

export type LgsPdfSection = 'sozel' | 'sayisal';

export type LgsPdfQuestion = {
  id: string;
  prompt: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  imageUrl?: string;
};

export type GenerateLgsPdfParams = {
  section: LgsPdfSection;
  testTitle: string;
  questions: LgsPdfQuestion[];
  userAnswers: Record<string, string>;
  correctCount: number;
  wrongCount: number;
  blankCount: number;
  successPercentage: number;
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
const PAGE = { marginX: 16, marginTop: 18, marginBottom: 18, width: 210, height: 297 };

const cleanPdfText = (text: string) =>
  String(text || '')
    .replace(/<br\s*\/?>(\s*)/gi, '\n')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const setTurkishFont = (doc: JsPdfInstance, style: 'normal' | 'bold' | 'italic' | 'bolditalic' = 'normal') => {
  doc.setFont(TURKISH_FONT_NAME, style);
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

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-lgs-jspdf], script[data-grade5-jspdf]');
    const script = existingScript ?? document.createElement('script');

    script.onload = () => {
      const loadedJsPdf = window.jspdf?.jsPDF;
      if (loadedJsPdf) resolve(loadedJsPdf);
      else reject(new Error('jsPDF yüklenemedi.'));
    };
    script.onerror = () => reject(new Error('jsPDF dosyası yüklenemedi.'));

    if (!existingScript) {
      script.src = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js';
      script.async = true;
      script.dataset.lgsJspdf = 'true';
      document.head.appendChild(script);
    }
  });

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
  return blobToDataUrl(await response.blob());
};

const getImageSize = (dataUrl: string) =>
  new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth || img.width, height: img.naturalHeight || img.height });
    img.onerror = () => reject(new Error('Görsel boyutu okunamadı.'));
    img.src = dataUrl;
  });

const getImageFormat = (dataUrl: string) => {
  const format = dataUrl.match(/^data:image\/(png|jpeg|jpg|webp);/i)?.[1]?.toLowerCase();
  if (format === 'jpg' || format === 'jpeg') return 'JPEG';
  if (format === 'webp') return 'WEBP';
  return 'PNG';
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

const addWrappedText = (doc: JsPdfInstance, text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
  const lines = doc.splitTextToSize(cleanPdfText(text), maxWidth) as string[];
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
};

const addQuestionImage = async (doc: JsPdfInstance, imageUrl: string, cursorY: number, title: string) => {
  try {
    const dataUrl = await loadImageDataUrl(imageUrl);
    const size = await getImageSize(dataUrl);
    const maxWidth = PAGE.width - PAGE.marginX * 2 - 8;
    const maxHeight = 62;
    const ratio = Math.min(maxWidth / size.width, maxHeight / size.height, 1);
    const imageWidth = size.width * ratio;
    const imageHeight = size.height * ratio;
    const nextY = ensureSpace(doc, cursorY, imageHeight + 8, title);
    doc.addImage(dataUrl, getImageFormat(dataUrl), PAGE.marginX + 4, nextY, imageWidth, imageHeight);
    return nextY + imageHeight + 7;
  } catch {
    const nextY = ensureSpace(doc, cursorY, 8, title);
    setTurkishFont(doc, 'italic');
    doc.setFontSize(9);
    doc.setTextColor(148, 85, 0);
    doc.text('Not: Soru görseli PDF’ye eklenemedi.', PAGE.marginX + 4, nextY);
    return nextY + 7;
  }
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

const addAnswerKeyPage = (doc: JsPdfInstance, questions: LgsPdfQuestion[], userAnswers: Record<string, string>, title: string) => {
  doc.addPage();
  drawHeader(doc, title);
  setTurkishFont(doc, 'bold');
  doc.setFontSize(18);
  doc.setTextColor(30, 41, 59);
  doc.text('Cevap Anahtarı', PAGE.marginX, PAGE.marginTop + 20);

  let cursorY = PAGE.marginTop + 34;
  const textWidth = PAGE.width - PAGE.marginX * 2;
  questions.forEach((question, index) => {
    cursorY = ensureSpace(doc, cursorY, 8, title);
    const userAnswer = userAnswers[question.id] || 'Boş';
    setTurkishFont(doc, userAnswer === question.correctAnswer ? 'bold' : 'normal');
    doc.setFontSize(10);
    doc.setTextColor(userAnswer === question.correctAnswer ? 22 : 51, userAnswer === question.correctAnswer ? 101 : 65, userAnswer === question.correctAnswer ? 52 : 85);
    cursorY = addWrappedText(doc, `${index + 1}. Doğru: ${question.correctAnswer} | Cevabınız: ${userAnswer}`, PAGE.marginX, cursorY, textWidth, 5) + 1.5;
  });
};

export const generateLgsPdf = async ({
  section,
  testTitle,
  questions,
  userAnswers,
  correctCount,
  wrongCount,
  blankCount,
  successPercentage,
}: GenerateLgsPdfParams) => {
  const jsPDF = await loadJsPdf();
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  await registerTurkishFont(doc);

  const title = section === 'sozel' ? 'LGS Sözel Bölüm PDF' : 'LGS Sayısal Bölüm PDF';
  const textWidth = PAGE.width - PAGE.marginX * 2;
  drawHeader(doc, title);

  setTurkishFont(doc, 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  let cursorY = addWrappedText(doc, section === 'sozel' ? 'Sözel Bölüm' : 'Sayısal Bölüm', PAGE.marginX, PAGE.marginTop + 16, textWidth, 6) + 2;

  setTurkishFont(doc);
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  cursorY = addWrappedText(doc, `Test: ${testTitle}`, PAGE.marginX, cursorY, textWidth, 5) + 2;
  cursorY = addWrappedText(doc, `Doğru: ${correctCount} | Yanlış: ${wrongCount} | Boş: ${blankCount}`, PAGE.marginX, cursorY, textWidth, 5) + 1;
  cursorY = addWrappedText(doc, `Başarı: %${successPercentage}`, PAGE.marginX, cursorY, textWidth, 5) + 8;

  for (const [index, question] of questions.entries()) {
    cursorY = ensureSpace(doc, cursorY, 22, title);
    setTurkishFont(doc, 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    cursorY = addWrappedText(doc, `${index + 1}. ${question.prompt}`, PAGE.marginX, cursorY, textWidth, 5.5) + 3;

    if (question.imageUrl) cursorY = await addQuestionImage(doc, question.imageUrl, cursorY, title);

    setTurkishFont(doc);
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    for (const option of question.options) {
      cursorY = ensureSpace(doc, cursorY, 9, title);
      cursorY = addWrappedText(doc, `${option.id}) ${option.text}`, PAGE.marginX + 5, cursorY, textWidth - 8, 5) + 1.5;
    }
    cursorY += 5;
  }

  addAnswerKeyPage(doc, questions, userAnswers, title);
  addFooter(doc);
  doc.save(`lgs-${section}-${slugifyGrade5PdfPart(testTitle)}.pdf`);
};
