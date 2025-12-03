const exams = [
  {
    key: "yks",
    name: "YKS",
    label: "Üniversite Sınavı",
    score: 100,
    monthly: "1.5–2M",
    tags: ["TYT", "AYT", "Sayısal", "Eşit Ağırlık"],
    highlight: "En yüksek arama hacmi",
  },
  {
    key: "lgs",
    name: "LGS",
    label: "Liselere Geçiş",
    score: 85,
    monthly: "600–900K",
    tags: ["8. sınıf", "Yeni nesil", "MEB"],
    highlight: "Ortaokuldan liseye geçiş",
  },
  {
    key: "kpss",
    name: "KPSS",
    label: "Kamu Personeli",
    score: 70,
    monthly: "500–700K",
    tags: ["Genel Yetenek", "Genel Kültür", "Eğitim Bilimleri"],
    highlight: "Memuriyet hedefleyenler için",
  },
  {
    key: "ehliyet",
    name: "Ehliyet",
    label: "Sürücü Belgesi",
    score: 65,
    monthly: "400–600K",
    tags: ["Trafik", "İlk yardım", "Motor"],
    highlight: "Çıkmış sorulardan güncel testler",
  },
  {
    key: "aol",
    name: "AÖL",
    label: "Açık Lise",
    score: 55,
    monthly: "300–500K",
    tags: ["Açık lise", "Kredi sistemi"],
    highlight: "Açık lise öğrencilerine özel",
  },
  {
    key: "dgs",
    name: "DGS",
    label: "Dikey Geçiş",
    score: 45,
    monthly: "200–400K",
    tags: ["Sözel mantık", "Sayısal mantık"],
    highlight: "Önlisans → Lisans geçişi",
  },
  {
    key: "ales",
    name: "ALES",
    label: "Akademik Sınav",
    score: 40,
    monthly: "150–300K",
    tags: ["Lisansüstü", "Akademik kariyer"],
    highlight: "Yüksek lisans ve doktora için",
  },
  {
    key: "yokdil",
    name: "YÖKDİL",
    label: "Yabancı Dil",
    score: 35,
    monthly: "100–250K",
    tags: ["İngilizce", "Akademik İngilizce"],
    highlight: "YDS hariç, YÖKDİL odaklı",
  },
  {
    key: "tus",
    name: "TUS",
    label: "Tıpta Uzmanlık",
    score: 30,
    monthly: "80–150K",
    tags: ["Tıp", "Klinik bilimler"],
    highlight: "Doktorlar için uzmanlık sınavı",
  },
  {
    key: "dus",
    name: "DUS",
    label: "Diş Hekimliği",
    score: 25,
    monthly: "50–100K",
    tags: ["Diş hekimliği", "Uzmanlık"],
    highlight: "Diş hekimlerine özel testler",
  },
];

export default function HomePage() {
  return (
    <div className="td-container">
      {/* NAVBAR */}
      <header className="td-navbar">
        <div className="td-logo">
          <div className="td-logo-icon">
            <div className="td-logo-inner">TD</div>
          </div>
          <div className="td-logo-text">
            <div className="td-logo-title">TestDünya</div>
            <div className="td-logo-sub">
              YKS, LGS, KPSS, Ehliyet ve tüm sınav testleri
            </div>
          </div>
        </div>

        <nav className="td-nav-links" aria-label="Ana menü">
          <div className="td-nav-pill">
            <span />
            <span>2025 sınav takvimi odaklı</span>
          </div>
          <a href="#popular" className="td-nav-link">
            Popüler sınavlar
          </a>
          <a href="#all-exams" className="td-nav-link">
            Tüm sınavlar
          </a>
          <a href="#how-it-works" className="td-nav-link">
            Nasıl çalışır?
          </a>
          <button className="td-nav-cta" type="button">
            Hemen test çöz
            <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="td-hero-layout">
        <div className="td-hero-card">
          <div className="td-hero-tag-row">
            <div className="td-hero-tag">
              Türkiye odaklı sınav platformu
              <span className="td-hero-tag-badge">Ücretsiz &amp; sınırsız</span>
            </div>
          </div>

          <h1 className="td-hero-title">
            Tüm büyük sınavlar{" "}
            <span>tek sitede, akıllı test sistemiyle.</span>
          </h1>

          <p className="td-hero-sub">
            <strong>TestDünya</strong>, YKS, LGS, KPSS, Ehliyet, ALES, YÖKDİL, DGS,
            TUS, DUS ve AÖL için modern{" "}
            <strong>online deneme sınavları</strong> sunar. Üye olmadan hemen
            başlamayı, ileride ise detaylı istatistik ve sıralamaları
            hedefliyoruz.
          </p>

          <div className="td-hero-actions">
            <button className="td-hero-primary" type="button">
              YKS ile başla
              <span aria-hidden="true">▶</span>
            </button>
            <button className="td-hero-secondary" type="button">
              Diğer sınavları gör
              <span aria-hidden="true">↓</span>
            </button>
          </div>

          <p className="td-hero-footnote">
            YDS bu projede yok; YDS tarafını{" "}
            <strong>EnglishMeter</strong> üzerinde detaylı şekilde geliştirmeye
            devam edeceğiz.
          </p>
        </div>

        <aside className="td-hero-right" aria-label="Sınav istatistikleri">
          <div className="td-hero-metrics">
            <div className="td-metric-card">
              <div className="td-metric-label">Aylık toplam arama hacmi</div>
              <div className="td-metric-value">3–5 milyon+</div>
              <div className="td-metric-pill">YKS &amp; LGS zirvede</div>
            </div>

            <div className="td-metric-card">
              <div className="td-metric-label">Hedeflenen sınav türü</div>
              <div className="td-metric-value">10+</div>
              <div className="td-metric-list">
                <span className="td-metric-chip">YKS</span>
                <span className="td-metric-chip">LGS</span>
                <span className="td-metric-chip">KPSS</span>
                <span className="td-metric-chip">Ehliyet</span>
              </div>
            </div>

            <div className="td-metric-card">
              <div className="td-metric-label">Soru tipi hedefi</div>
              <div className="td-metric-value">Çıkmış + özgün</div>
              <div className="td-metric-list">
                <span className="td-metric-chip">Konu tarama</span>
                <span className="td-metric-chip">Mini deneme</span>
                <span className="td-metric-chip">Tam deneme</span>
              </div>
            </div>

            <div className="td-metric-card" id="how-it-works">
              <div className="td-metric-label">TestDünya nasıl işleyecek?</div>
              <div className="td-metric-list">
                <span className="td-metric-chip">1. Sınavını seç</span>
                <span className="td-metric-chip">2. Test türünü belirle</span>
                <span className="td-metric-chip">3. Soruları çöz</span>
                <span className="td-metric-chip">4. Detaylı analiz gör (yakında)</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* EXAM GRID */}
      <section id="popular" className="td-section-header">
        <div>
          <h2 className="td-section-title">Popüler sınavlar</h2>
          <p className="td-section-sub">
            Yüksek arama hacmine ve yoğun rekabete sahip sınavlara öncelik veriyoruz.
          </p>
        </div>
        <div className="td-section-filters">
          <button
            className="td-filter-pill td-filter-pill--active"
            type="button"
          >
            YKS &amp; LGS
          </button>
          <button className="td-filter-pill" type="button">
            Mezun &amp; KPSS
          </button>
          <button className="td-filter-pill" type="button">
            Dil &amp; Lisansüstü
          </button>
          <button className="td-filter-pill" type="button">
            Sağlık (TUS &amp; DUS)
          </button>
        </div>
      </section>

      <section id="all-exams">
        <div className="td-exam-grid" aria-label="Sınav listesi">
          {exams.map((exam) => (
            <article key={exam.key} className="td-exam-card">
              <div className="td-exam-header">
                <div>
                  <div className="td-exam-name">
                    {exam.name}{" "}
                    <span style={{ opacity: 0.7, fontWeight: 400 }}>
                      · {exam.label}
                    </span>
                  </div>
                  <div className="td-exam-score">
                    İlgi skoru: {exam.score}/100 · Aylık arama: {exam.monthly}
                  </div>
                </div>
                {exam.score >= 80 ? (
                  <span className="td-exam-badge">Trend</span>
                ) : exam.score >= 60 ? (
                  <span className="td-exam-badge">Stabil</span>
                ) : (
                  <span className="td-exam-badge">Niş</span>
                )}
              </div>

              <div className="td-progress-track" aria-hidden="true">
                <div
                  className="td-progress-bar"
                  style={{ transform: `scaleX(${exam.score / 100})` }}
                />
              </div>

              <div className="td-exam-tags">
                {exam.tags.map((tag) => (
                  <span key={tag} className="td-exam-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="td-exam-footer">
                <button className="td-exam-cta td-exam-cta--primary" type="button">
                  {exam.name} testlerini gör
                </button>
                <button className="td-exam-cta" type="button">
                  Çıkmış sorular &amp; analiz
                </button>
              </div>

              <p className="td-exam-score" style={{ marginTop: "0.4rem" }}>
                {exam.highlight}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
