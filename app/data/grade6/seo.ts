import { fenData } from './fen';
import { ingilizceData } from './ingilizce';
import { matematikData } from './matematik';
import { turkceData } from './turkce';
import type { Question6, SubjectData, SubjectId, TermType } from './types';

export const canonicalBase = 'https://testdunya.net';
export const grade6Subjects: {
  id: SubjectId;
  label: string;
  icon: string;
  gradient: string;
  description: string;
}[] = [
  { id: 'matematik', label: 'Matematik', icon: '➕', gradient: 'from-blue-600 to-cyan-600', description: 'İlk konuları adım adım tekrar et, çözümleri incele.' },
  { id: 'turkce', label: 'Türkçe', icon: '📝', gradient: 'from-rose-600 to-orange-600', description: 'Okuma, anlama ve dil becerilerini geliştir.' },
  { id: 'fen', label: 'Fen Bilimleri', icon: '🧪', gradient: 'from-emerald-700 to-teal-600', description: 'Fen konularını açıklamalı sorularla pekiştir.' },
  { id: 'ingilizce', label: 'İngilizce', icon: '🇬🇧', gradient: 'from-purple-600 to-indigo-600', description: 'Kelime ve iletişim becerilerini sorularla çalış.' },
];

export const grade6Data: Record<SubjectId, SubjectData> = {
  matematik: matematikData,
  turkce: turkceData,
  fen: fenData,
  ingilizce: ingilizceData,
};

export type Grade6Test = {
  subject: (typeof grade6Subjects)[number];
  term: TermType;
  testNo: number;
  slug: string;
  title: string;
  topic: string;
  questions: Question6[];
};

const starterTopics: Record<SubjectId, string[]> = {
  matematik: ['Sayılar ve Nicelikler: Şekilli Orta–Zor Sorular', 'Sayılar ve Nicelikler: Uygulama', 'Sayılar ve Nicelikler: Akıl Yürütme', 'Sayılar ve Nicelikler: Şekilli Sorular', 'Sayılar ve Nicelikler: Şekilli Akıl Yürütme', 'Deneysel Olasılık: Şekilli Akıl Yürütme', 'Ondalık Gösterimler ve Uzunluk Ölçme: Orta–Zor Sorular', 'İstatistiksel Araştırma: Verileri Yorumlama', 'Geometrik Şekiller: Açılar ve Dörtgenler', 'Cebirsel Düşünme: Örüntüler ve Algoritmalar', 'Karma Akıl Yürütme: Zor Sorular', 'Karma Problemler: Zor Akıl Yürütme'],
  turkce: ['Anlam Bilgisi, Paragraf ve Görsel Okuma (Orta)', 'Metinde Anlam, Sıralama ve Görsel Okuma (Orta)', 'Paragraf, Çıkarım ve Görsel Yorumlama (Orta)', 'Anlam İlişkileri ve Eleştirel Okuma (Orta)', 'Ayrıntıdan Anlama ve Bilgileri Birleştirme (Orta)', 'Metinleri Karşılaştırma ve İletileri Yorumlama (Orta)', 'Örtük Anlam ve Görsel Yönergeler (Orta)', 'Bağlam, Karşılaştırma ve Erişim İletileri (Orta)', 'Metinler Arası Bağlar ve Bilgiye Ulaşma (Orta)', 'Karma Değerlendirme: Anlam ve Görsel İletiler (Orta)', 'Kanıt, Bağlam ve Çok Adımlı Çıkarım (Zor)', 'Örtük İleti, Tutarlılık ve Çoklu Koşullar (Zor)', 'Gerekçe, Kapsam ve Anlam Bağları (Zor)', 'Bakış Açısı, Kanıt ve Yorum Sınırları (Zor)', 'Bağlam, Örtük İleti ve Anlatım Tercihleri (Zor)', 'Anlatım Katmanları, Tutarlılık ve Eleştirel Çıkarım (Zor)'],
  fen: ['Güneş Sistemi ve Tutulmalar: Orta–Zor Sorular', 'Tutulmalar ve Bileşke Kuvvet: Orta–Zor Sorular', 'Kuvvet, Hareket, Sürat ve Hız: Orta–Zor Sorular', 'Canlılarda Üreme, Büyüme ve Gelişme: Orta–Zor Sorular', 'Denetleyici ve Düzenleyici Sistemler: Orta–Zor Sorular', 'Işığın Yansıması ve Aynalar: Orta–Zor Sorular', 'Işığın Soğurulması ve Renkler: Orta–Zor Sorular', 'Genleşme ve Hâl Değişim Noktaları: Orta–Zor Sorular', 'Yoğunluk: Kütle, Hacim ve Yüzme: Orta–Zor Sorular', 'Elektriğin İletimi ve Direnç: Orta–Zor Sorular', 'Deney, Veri ve Bilimsel Çıkarım: Karma Tekrar (Orta–Zor)', 'Kanıtları Birleştirme ve Günlük Yaşam: Karma Tekrar (Orta–Zor)'],
  ingilizce: ['Life: Günlük Rutinler ve Saatler (Orta)', 'Yummy Breakfast: Yiyecekler ve Tercihler (Orta)', 'Downtown: Şehirde Yaşam ve Karşılaştırmalar (Orta)', 'Weather and Emotions: Hava Durumu ve Duygular (Orta)', 'At the Fair: Lunapark Etkinlikleri ve Görüşler (Orta)', 'Karma Tekrar: İlk Beş Konu (Orta)', 'Günlük Yaşamdan Karma Sorular (Orta)', 'Görsel Okuma ve Diyaloglar: Karma Tekrar (Orta)', 'Günlük Planlar ve İletişim: Karma Tekrar (Orta)', 'Günlük Durumlar ve Anlam Çıkarma: Karma Tekrar (Orta)', 'Günlük Yaşamda Planlar ve Tercihler: Karma Tekrar (Orta)', 'Günlük İletişim ve Görsel İpuçları: Karma Tekrar (Orta)'],
};

export const getGrade6Subject = (id: string) => grade6Subjects.find((subject) => subject.id === id);

export function getGrade6Tests(subjectId: SubjectId): Grade6Test[] {
  const subject = getGrade6Subject(subjectId);
  if (!subject) return [];
  return ([1, 2] as const).flatMap((term) =>
    Object.entries(grade6Data[subjectId][term === 1 ? 'term1' : 'term2'])
      .filter(([key, questions]) => /^test[1-9]\d*$/.test(key) && questions.length > 0)
      .sort(([a], [b]) => Number(a.slice(4)) - Number(b.slice(4)))
      .map(([key, questions]) => {
        const testNo = Number(key.slice(4));
        return {
          subject,
          term,
          testNo,
          // Keep published links stable when new tests are added to either term.
          slug: term === 1 ? `test-${testNo}` : `2-donem-test-${testNo}`,
          title: `${term}. Dönem • Test ${testNo}`,
          topic: term === 1 ? starterTopics[subjectId][testNo - 1] ?? 'Konu Tekrarı' : 'Konu Tekrarı',
          questions,
        };
      }),
  );
}

export const getGrade6Test = (subjectId: SubjectId, slug: string) =>
  getGrade6Tests(subjectId).find((test) => test.slug === slug);

export const getGrade6SubjectParams = () => grade6Subjects.map((subject) => ({ subject: subject.id }));

export const getGrade6TestParams = () => grade6Subjects.flatMap((subject) =>
  getGrade6Tests(subject.id).map((test) => ({ subject: subject.id, testSlug: test.slug })),
);

