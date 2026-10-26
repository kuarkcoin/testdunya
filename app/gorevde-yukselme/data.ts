import { getTestCatalog } from '../../lib/test-data';

export const GOREVDE_SUBJECTS = [
  { slug: 'anayasa', title: 'T.C. Anayasası' },

  { slug: 'dmk-657', title: '657 Sayılı Devlet Memurları Kanunu (1-212)' },
  { slug: 'etik-5176', title: '5176 Sayılı Etik Kurulu + Yönetmelik' },
  { slug: 'isg-6331', title: '6331 Sayılı İş Sağlığı ve Güvenliği Kanunu' },
  { slug: 'kmykk-5018', title: '5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu' },
  { slug: 'bilgi-edinme-4982', title: '4982 Sayılı Bilgi Edinme Hakkı Kanunu + Yönetmelik' },
  { slug: 'iyuk-2577', title: '2577 Sayılı İdari Yargılama Usulü Kanunu' },
  { slug: 'cbk-1-16-bolum', title: '1 Sayılı CBK (Onaltıncı Bölüm)' },
  { slug: 'resmi-yazisma-yonetmelik', title: 'Resmi Yazışmalarda Usul ve Esaslar Yönetmeliği' },
  { slug: 'ataturk-ilkeleri-inkilap', title: 'Atatürk İlkeleri ve İnkılap Tarihi' },
  { slug: 'turkce-dilbilgisi', title: 'Türkçe Dil Bilgisi ve Yazım Kuralları' },
  { slug: 'genel-kultur', title: 'Genel Kültür' },

  // ✅ Yeni ekler
  { slug: 'kamu-ihale-4734', title: '4734 Sayılı Kamu İhale Kanunu' },
  { slug: 'devlet-ihale-2886', title: '2886 Sayılı Devlet İhale Kanunu' },
  { slug: 'dilekce-hakki-3071', title: '3071 Sayılı Dilekçe Hakkı Kanunu' },
];

export type GorevdeSubject = {
  slug: string;
  title: string;
  tests: Awaited<ReturnType<typeof getTestCatalog>>;
};

export async function getGorevdeSubjects(): Promise<GorevdeSubject[]> {
  const catalog = await getTestCatalog();
  return GOREVDE_SUBJECTS.map((subject) => ({
    ...subject,
    tests: catalog.filter((test) => {
      const match = test.id.match(/^gorevde-yukselme-(.+)-(\d+)$/);
      return match?.[1] === subject.slug;
    }).sort((a, b) => Number(a.id.split('-').at(-1)) - Number(b.id.split('-').at(-1))),
  }));
}
