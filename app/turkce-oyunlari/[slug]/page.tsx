import Link from "next/link";
import TurkceGameEngine from "../../../components/turkce-oyunlari/TurkceGameEngine";
import { getTurkceGameBySlug } from "../../../components/turkce-oyunlari/turkce-games-config";

type Props = {
  params: { slug: string };
};

export default function TurkceGameDetailPage({ params }: Props) {
  const game = getTurkceGameBySlug(params.slug);

  if (!game) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-indigo-100 px-4 py-10">
        <section className="mx-auto max-w-2xl rounded-3xl border-4 border-rose-200 bg-white p-6 text-center shadow-xl">
          <h1 className="text-3xl font-black text-rose-700">Oyun Bulunamadı</h1>
          <p className="mt-2 text-slate-700">Aradığın Türkçe oyunu mevcut değil veya kaldırılmış olabilir.</p>
          <Link href="/turkce-oyunlari" className="mt-4 inline-block rounded-xl bg-indigo-600 px-5 py-3 font-black text-white">Türkçe Oyunları Merkezine Dön</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-indigo-100 px-3 py-6 md:px-6 md:py-10">
      <div className="mx-auto mb-4 flex max-w-4xl flex-wrap items-center gap-2 text-xs font-bold md:text-sm">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">Kategori: {game.category}</span>
        <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-fuchsia-700">Zorluk: {game.difficulty}</span>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Sınıf: {game.gradeLevels.join(", ")}</span>
      </div>
      <TurkceGameEngine unit={game} />
    </main>
  );
}

// Entegrasyon notu: Bu dinamik route slug ile config yükleyip tek bir yeniden kullanılabilir oyun motorunu çalıştırır.
