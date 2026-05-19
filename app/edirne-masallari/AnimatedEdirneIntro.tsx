export default function AnimatedEdirneIntro() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[290px] overflow-hidden sm:h-[340px] lg:h-[400px]"
    >
      <div className="edirne-scene-overlay absolute inset-0" />

      <svg viewBox="0 0 1440 420" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="edirneSun" cx="50%" cy="24%" r="44%">
            <stop offset="0%" stopColor="#d6b45d" stopOpacity="0.95" />
            <stop offset="48%" stopColor="#d6b45d" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#d6b45d" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edirneRiver" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4f7d3a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#1d2f57" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#4f7d3a" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        <g className="edirne-intro-main">
          <ellipse cx="720" cy="86" rx="380" ry="120" fill="url(#edirneSun)" className="edirne-sun-pulse" />

          <g className="edirne-mist-a">
            <ellipse cx="390" cy="164" rx="230" ry="38" fill="#fbf5e8" fillOpacity="0.42" className="dark:fill-[#d9d0bf]" />
            <ellipse cx="930" cy="148" rx="280" ry="40" fill="#fbf5e8" fillOpacity="0.34" className="dark:fill-[#cfc6b3]" />
          </g>
          <g className="edirne-mist-b">
            <ellipse cx="670" cy="178" rx="265" ry="34" fill="#fbf5e8" fillOpacity="0.35" className="dark:fill-[#d2c8b8]" />
            <ellipse cx="1120" cy="184" rx="180" ry="30" fill="#fbf5e8" fillOpacity="0.24" className="dark:fill-[#c8beae]" />
          </g>

          <g className="edirne-skyline-draw text-[#1d2f57]/75 dark:text-[#e7dcc7]/70">
            <path d="M130 220h1180" fill="none" stroke="currentColor" strokeWidth="2.8" />
            <path d="M252 220V154h66v66M318 154V126M286 154h34" fill="none" stroke="currentColor" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M366 220V140h82v80M407 140c0-24 38-24 38 0" fill="none" stroke="currentColor" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M474 220V130h82v90M515 130c0-28 42-28 42 0" fill="none" stroke="currentColor" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M602 220c26-70 150-70 176 0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <path d="M664 220V114M714 220V114" fill="none" stroke="currentColor" strokeWidth="5.2" strokeLinecap="round" />
            <path d="M682 114V74M696 114V64M710 114V74" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M816 220V144h74v76M854 144V106" fill="none" stroke="currentColor" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M930 220c20-58 110-58 130 0" fill="none" stroke="currentColor" strokeWidth="5.6" strokeLinecap="round" />
            <path d="M1068 220V162h88v58M1112 162V124" fill="none" stroke="currentColor" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <g className="edirne-river-drift">
            <path d="M-20 266c188-34 294 28 480-8 172-33 293 28 470 3 170-24 280-9 530 12" fill="none" stroke="url(#edirneRiver)" strokeWidth="12" />
          </g>
          <g className="edirne-river-drift-reverse">
            <path d="M-30 302c198-38 310 25 496-10 178-34 296 26 480 5 178-20 292-2 536 17" fill="none" stroke="#1d2f57" strokeOpacity="0.34" strokeWidth="8" />
            <path d="M-24 324c180-28 288 20 462-8 170-28 292 22 470 6 170-16 278 2 518 20" fill="none" stroke="#4f7d3a" strokeOpacity="0.3" strokeWidth="7" />
          </g>

          <g className="edirne-river-sparkle text-[#d6b45d]/75 dark:text-[#f3d38b]/75">
            <circle cx="368" cy="294" r="2.2" fill="currentColor" />
            <circle cx="540" cy="274" r="2" fill="currentColor" />
            <circle cx="716" cy="298" r="2.1" fill="currentColor" />
            <circle cx="928" cy="282" r="2" fill="currentColor" />
            <circle cx="1106" cy="301" r="2.2" fill="currentColor" />
          </g>

          <g className="edirne-wrestler text-[#d6b45d]/90 dark:text-[#efcf76]/85">
            <path d="M1244 262c8-18 30-18 38 0M1238 288c12-25 42-25 54 0M1257 252v41M1273 252v41M1248 274h34" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="1264" cy="244" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
          </g>
        </g>
      </svg>

      <style>{`
        .edirne-scene-overlay {
          background: linear-gradient(to bottom, rgba(251, 245, 232, 0.82) 0%, rgba(251, 245, 232, 0.38) 56%, rgba(251, 245, 232, 0.02) 100%);
          animation: edirneIntroFade 3.8s ease-out both;
        }

        .dark .edirne-scene-overlay {
          background: linear-gradient(to bottom, rgba(15, 12, 19, 0.88) 0%, rgba(15, 12, 19, 0.52) 56%, rgba(15, 12, 19, 0.08) 100%);
        }

        .edirne-intro-main {
          animation: edirneIntroRise 3.8s cubic-bezier(0.2, 0.68, 0.15, 1) both;
        }

        .edirne-sun-pulse {
          animation: edirneGlowPulse 6s ease-in-out infinite alternate;
        }

        .edirne-mist-a,
        .edirne-mist-b {
          transform-origin: center;
          filter: blur(1.2px);
        }

        .edirne-mist-a {
          animation: edirneMistSwayA 15s ease-in-out infinite alternate;
        }

        .edirne-mist-b {
          animation: edirneMistSwayB 18s ease-in-out infinite alternate;
        }

        .edirne-skyline-draw path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: edirneLineDraw 3.4s cubic-bezier(0.2, 0.75, 0.2, 1) forwards;
        }

        .edirne-river-drift {
          animation: edirneRiverFlow 18s linear infinite;
        }

        .edirne-river-drift-reverse {
          animation: edirneRiverFlowReverse 14s linear infinite;
        }

        .edirne-river-sparkle circle {
          animation: edirneSparkle 4.8s ease-in-out infinite;
        }

        .edirne-river-sparkle circle:nth-child(2) { animation-delay: 0.6s; }
        .edirne-river-sparkle circle:nth-child(3) { animation-delay: 1.2s; }
        .edirne-river-sparkle circle:nth-child(4) { animation-delay: 1.8s; }
        .edirne-river-sparkle circle:nth-child(5) { animation-delay: 2.4s; }

        .edirne-wrestler {
          opacity: 0;
          transform: translateY(8px);
          animation: edirneWrestlerReveal 1.8s ease-out 1s forwards;
        }

        @keyframes edirneIntroFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes edirneIntroRise {
          0% { opacity: 0; transform: translateY(12px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes edirneGlowPulse {
          0% { opacity: 0.45; transform: scale(0.97); }
          100% { opacity: 0.95; transform: scale(1.05); }
        }

        @keyframes edirneLineDraw {
          0% { stroke-dashoffset: 1200; opacity: 0.32; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes edirneRiverFlow {
          0% { transform: translateX(-34px); }
          100% { transform: translateX(34px); }
        }

        @keyframes edirneRiverFlowReverse {
          0% { transform: translateX(28px); }
          100% { transform: translateX(-28px); }
        }

        @keyframes edirneMistSwayA {
          0% { opacity: 0.44; transform: translateX(-22px); }
          100% { opacity: 0.28; transform: translateX(24px); }
        }

        @keyframes edirneMistSwayB {
          0% { opacity: 0.28; transform: translateX(24px); }
          100% { opacity: 0.46; transform: translateX(-20px); }
        }

        @keyframes edirneSparkle {
          0%, 100% { opacity: 0.2; transform: translateY(0) scale(0.85); }
          50% { opacity: 1; transform: translateY(-3px) scale(1.2); }
        }

        @keyframes edirneWrestlerReveal {
          0% { opacity: 0; transform: translateY(8px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .edirne-scene-overlay,
          .edirne-intro-main,
          .edirne-sun-pulse,
          .edirne-mist-a,
          .edirne-mist-b,
          .edirne-skyline-draw path,
          .edirne-river-drift,
          .edirne-river-drift-reverse,
          .edirne-river-sparkle circle,
          .edirne-wrestler {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
