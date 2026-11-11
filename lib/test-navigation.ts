import { isPersonalTestId, type TestCatalogEntry } from './test-types';

export type TestCategoryKey = 'yks' | 'kpss' | 'tus' | 'dus' | 'lgs' | 'ielts' | 'paragraf' | 'zeka' | 'gorevde-yukselme' | 'psikoloji' | 'diger';

export type TestCategory = {
  key: TestCategoryKey;
  title: string;
  anchor: string;
  description: string;
};

export type TestCategoryGroup = {
  category: TestCategory;
  tests: TestCatalogEntry[];
  questionCount: number;
};

export const TEST_CATEGORIES: readonly TestCategory[] = [
  { key: 'yks', title: 'YKS Sözel Denemeleri', anchor: 'yks', description: 'Üniversite sınavına hazırlık için sözel denemeler. Bir test seçerek soruları çözebilir ve sonucunuz üzerinden çalışmanızı sürdürebilirsiniz.' },
  { key: 'kpss', title: 'KPSS Testleri', anchor: 'kpss', description: 'KPSS hazırlığında kullanabileceğiniz testler ve sözel denemeler. Soru sayılarını karşılaştırarak çalışma sürenize uygun bir test seçin.' },
  { key: 'tus', title: 'TUS Denemeleri', anchor: 'tus', description: 'Tıpta Uzmanlık Sınavı hazırlığı için çoktan seçmeli denemeler. Farklı testlerle bilgilerinizi tekrar edin ve cevaplarınızı kontrol edin.' },
  { key: 'dus', title: 'DUS Denemeleri', anchor: 'dus', description: 'Diş Hekimliğinde Uzmanlık Sınavı hazırlığı için deneme testleri. Çalışmak istediğiniz denemeyi seçerek sorulara başlayın.' },
  { key: 'lgs', title: 'LGS Testleri', anchor: 'lgs', description: 'Liselere Geçiş Sistemi hazırlığı için genel, sözel ve sayısal testler. Test adından alanını ve kartından soru sayısını inceleyin.' },
  { key: 'ielts', title: 'IELTS ve İngilizce Testleri', anchor: 'ielts', description: 'İngilizce seviye, kelime bilgisi, dil bilgisi, okuma ve dinleme alıştırmaları. Test adında belirtilen beceriyi seçerek pratik yapın.' },
  { key: 'paragraf', title: 'Paragraf Testleri', anchor: 'paragraf', description: '5. sınıf düzeyindeki metinler ve sorularla okuduğunu anlama çalışmaları. Paragrafları dikkatle okuyup soruların cevaplarını bulun.' },
  { key: 'zeka', title: 'Zeka Bulmacaları', anchor: 'zeka', description: 'Mantık yürütme ve problem çözme alıştırmaları. Sorulardaki ilişkileri inceleyin, çözümünüzü seçin ve farklı bulmacalarla devam edin.' },
  { key: 'gorevde-yukselme', title: 'Görevde Yükselme Testleri', anchor: 'gorevde-yukselme', description: '657 sayılı Devlet Memurları Kanunu ve kamu görevlileri etik mevzuatı üzerine testler. Test başlığından çalışacağınız mevzuatı seçin.' },
  { key: 'psikoloji', title: 'Psikoloji ve Farkındalık Testleri', anchor: 'psikoloji', description: 'Psikolojik manipülasyon tekniklerini günlük hayattan örneklerle tanıyın. İletişim ve davranışlar üzerine soruları çözerek açıklamaları inceleyin.' },
  { key: 'diger', title: 'Diğer Testler', anchor: 'diger', description: 'Diğer konu ve alanlardaki testleri keşfedin. Her kartta testin adını ve soru sayısını görebilirsiniz.' },
];

const naturalOrder = new Intl.Collator('tr', { numeric: true, sensitivity: 'base' });

export function getTestCategory(id: string): TestCategory {
  const key: TestCategoryKey = id.startsWith('yks-') ? 'yks'
    : id.startsWith('kpss-') ? 'kpss'
    : id.startsWith('tus-') ? 'tus'
    : id.startsWith('dus-') ? 'dus'
    : id.startsWith('lgs-') ? 'lgs'
    : id.startsWith('ielts-') ? 'ielts'
    : id.startsWith('paragraf-') ? 'paragraf'
    : id.startsWith('zeka-bulmaca-') ? 'zeka'
    : id.startsWith('gorevde-yukselme-') ? 'gorevde-yukselme'
    : id.startsWith('psikolojik-') ? 'psikoloji'
    : 'diger';
  return TEST_CATEGORIES.find((category) => category.key === key)!;
}

function canonicalTests(catalog: readonly TestCatalogEntry[]): TestCatalogEntry[] {
  const seen = new Set<string>();
  return catalog.filter((test) => {
    if (test.id !== test.canonicalId || !Number.isInteger(test.questionCount) || test.questionCount <= 0
      || !/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,159}$/.test(test.id) || isPersonalTestId(test.id) || seen.has(test.id)) return false;
    seen.add(test.id);
    return true;
  });
}

export function groupCanonicalTests(catalog: readonly TestCatalogEntry[]): TestCategoryGroup[] {
  const groups = new Map<TestCategoryKey, TestCategoryGroup>();
  for (const test of canonicalTests(catalog)) {
    const category = getTestCategory(test.id);
    const group = groups.get(category.key) ?? { category, tests: [], questionCount: 0 };
    group.tests.push(test);
    group.questionCount += test.questionCount;
    groups.set(category.key, group);
  }
  return TEST_CATEGORIES.flatMap((category) => {
    const group = groups.get(category.key);
    if (!group) return [];
    group.tests.sort((a, b) => naturalOrder.compare(a.id, b.id));
    return [group];
  });
}

export function getTestParent(id: string): { title: string; href: string; breadcrumbPath: string } {
  const category = getTestCategory(id);
  let path: string | undefined;
  let title = category.title;
  if (category.key === 'paragraf') path = '/paragraf';
  else if (category.key === 'zeka') path = '/zeka-bulmacalari';
  else if (id.startsWith('lgs-sozel-')) { path = '/lgs/sozel'; title = 'LGS Sözel Testleri'; }
  else if (id.startsWith('lgs-sayisal-')) { path = '/lgs/sayisal'; title = 'LGS Sayısal Testleri'; }
  else if (category.key === 'lgs') path = '/lgs';
  else if (/^ielts-listening(?:-|$)/.test(id)) { path = '/ielts/listening'; title = 'IELTS Listening'; }
  else if (/^ielts-writing(?:-|$)/.test(id)) { path = '/ielts/writing'; title = 'IELTS Writing'; }
  else if (/^ielts-speaking(?:\d|-|$)/.test(id)) { path = '/ielts/speaking'; title = 'IELTS Speaking'; }
  else if (id.startsWith('gorevde-yukselme-dmk-657-')) { path = '/gorevde-yukselme/dmk-657'; title = '657 Sayılı DMK Testleri'; }
  else if (id.startsWith('gorevde-yukselme-etik-5176-')) { path = '/gorevde-yukselme/etik-5176'; title = '5176 Sayılı Etik Mevzuatı Testleri'; }
  else if (category.key === 'gorevde-yukselme') path = '/gorevde-yukselme';
  return path ? { title, href: path, breadcrumbPath: path }
    : { title, href: `/testler#${category.anchor}`, breadcrumbPath: '/testler' };
}

function series(id: string): string {
  return id.replace(/-?\d+$/, '');
}

function testNumber(id: string): number {
  return Number(id.match(/\d+$/)?.[0] ?? 0);
}

export function getRelatedTests(catalog: readonly TestCatalogEntry[], testId: string, limit = 6): TestCatalogEntry[] {
  if (!Number.isFinite(limit) || limit <= 0) return [];
  const canonicalId = catalog.find((test) => test.id === testId)?.canonicalId ?? testId;
  const tests = canonicalTests(catalog);
  const current = tests.find((test) => test.id === canonicalId);
  if (!current) return [];
  const category = getTestCategory(current.id).key;
  const currentSeries = series(current.id);
  const currentNumber = testNumber(current.id);
  return tests.filter((test) => test.id !== canonicalId && getTestCategory(test.id).key === category)
    .sort((a, b) => {
      const sameSeries = Number(series(b.id) === currentSeries) - Number(series(a.id) === currentSeries);
      if (sameSeries) return sameSeries;
      return Math.abs(testNumber(a.id) - currentNumber) - Math.abs(testNumber(b.id) - currentNumber)
        || naturalOrder.compare(a.id, b.id);
    })
    .slice(0, Math.floor(limit));
}
