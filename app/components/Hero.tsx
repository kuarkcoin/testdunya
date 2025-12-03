// app/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-12 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Türkiye'nin En Kapsamlı <br />
          <span className="text-indigo-600">Online Test Platformu</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          YKS, LGS, KPSS, Ehliyet ve daha fazlası. Ücretsiz deneme sınavları çöz,
          sıralamanı gör ve hedeflerine ulaş.
        </p>
      </div>
    </section>
  );
};
