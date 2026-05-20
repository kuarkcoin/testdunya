export default function AnimatedEdirneIntro() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[288px] overflow-hidden sm:h-[338px] lg:h-[400px]"
    >
      <div className="edirne-text-soften absolute inset-0" />

      <svg viewBox="0 0 1440 430" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="27%" r="46%">
            <stop offset="0%" stopColor="#d6b45d" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#d6b45d" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#d6b45d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="selimiyeHalo" cx="50%" cy="45%" r="52%">
            <stop offset="0%" stopColor="#fbf5e8" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#fbf5e8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="silhouetteFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d2f57" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#1d2f57" stopOpacity="0.84" />
          </linearGradient>
          <linearGradient id="bridgeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a1f2b" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#1d2f57" stopOpacity="0.58" />
          </linearGradient>
          <linearGradient id="riverMain" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4f7d3a" stopOpacity="0.42" />
            <stop offset="50%" stopColor="#1d2f57" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#4f7d3a" stopOpacity="0.42" />
          </linearGradient>
          <linearGradient id="wrestlerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d6b45d" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7a1f2b" stopOpacity="0.88" />
          </linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="170%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
          <filter id="selimiyeBlur" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        <g className="edirne-scene-enter">
          <ellipse cx="720" cy="98" rx="420" ry="148" fill="url(#sunGlow)" className="edirne-sun-pulse" />
          <ellipse cx="722" cy="182" rx="230" ry="86" fill="url(#selimiyeHalo)" className="edirne-halo" />

          <g className="edirne-haze haze-1">
            <ellipse cx="380" cy="156" rx="238" ry="34" fill="#fbf5e8" fillOpacity="0.24" />
            <ellipse cx="1020" cy="164" rx="280" ry="38" fill="#fbf5e8" fillOpacity="0.2" />
          </g>
          <g className="edirne-haze haze-2">
            <ellipse cx="620" cy="194" rx="300" ry="32" fill="#fbf5e8" fillOpacity="0.16" />
            <ellipse cx="1140" cy="210" rx="180" ry="26" fill="#fbf5e8" fillOpacity="0.16" />
          </g>

          <g className="selimiye-shadow" filter="url(#softShadow)">
            <path d="M436 238h570v26H436z" fill="#1d2f57" fillOpacity="0.28" />
            <path d="M540 238c26-84 176-84 206 0z" fill="#7a1f2b" fillOpacity="0.23" />
            <path d="M520 238c20-44 84-44 102 0zM754 238c18-44 80-44 98 0z" fill="#1d2f57" fillOpacity="0.2" />
          </g>

          <g className="selimiye-fill">
            <path d="M438 238h566v18H438z" fill="url(#silhouetteFill)" />
            <path d="M540 238c26-84 176-84 206 0z" fill="url(#silhouetteFill)" />
            <path d="M520 238c20-44 84-44 102 0zM754 238c18-44 80-44 98 0z" fill="#1d2f57" fillOpacity="0.8" />
            <path d="M500 238V132h20v106h-20zM602 238V126h22v112h-22zM664 238V126h22v112h-22zM768 238V132h20v106h-20z" fill="#1d2f57" fillOpacity="0.86" />
            <path d="M510 132V86M613 126V76M675 126V76M778 132V86" stroke="#d6b45d" strokeOpacity="0.58" strokeWidth="2.8" strokeLinecap="round" />
            <ellipse cx="644" cy="174" rx="70" ry="30" fill="#fbf5e8" fillOpacity="0.16" />
          </g>

          <g className="selimiye-lines text-[#f8ecd0]/80 dark:text-[#e8d8af]/65" filter="url(#selimiyeBlur)">
            <path d="M438 238H1004" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <path d="M540 238c26-84 176-84 206 0" fill="none" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" />
            <path d="M520 238c20-44 84-44 102 0M754 238c18-44 80-44 98 0" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M500 238V132h20v106M602 238V126h22v112M664 238V126h22v112M768 238V132h20v106" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M510 132V86M613 126V76M675 126V76M778 132V86" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </g>

          <g className="meric-bridge">
            <path d="M250 272h920v11H250z" fill="url(#bridgeFill)" />
            <path d="M286 283c18-32 52-32 70 0M370 283c18-32 52-32 70 0M454 283c18-32 52-32 70 0M538 283c18-32 52-32 70 0M622 283c18-32 52-32 70 0M706 283c18-32 52-32 70 0M790 283c18-32 52-32 70 0M874 283c18-32 52-32 70 0M958 283c18-32 52-32 70 0" fill="none" stroke="#f3dfaf" strokeOpacity="0.45" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M248 272h924" fill="none" stroke="#1d2f57" strokeOpacity="0.62" strokeWidth="2.8" />
          </g>

          <g className="river-base">
            <path d="M-20 264h1480v176H-20z" fill="url(#riverMain)" />
          </g>
          <g className="river-wave wave-a">
            <path d="M-20 302c210-28 324 20 530-4 198-22 316 22 520 7 196-14 304 0 470 18" fill="none" stroke="#f7e7c0" strokeOpacity="0.24" strokeWidth="7" />
          </g>
          <g className="river-wave wave-b">
            <path d="M-30 328c214-26 328 18 532-3 194-19 320 20 520 10 188-10 302 6 472 22" fill="none" stroke="#1d2f57" strokeOpacity="0.36" strokeWidth="8" />
          </g>
          <g className="river-wave wave-c">
            <path d="M-20 350c196-18 310 14 506 4 186-10 316 14 506 14 178 0 296 14 460 28" fill="none" stroke="#4f7d3a" strokeOpacity="0.33" strokeWidth="7" />
          </g>

          <g className="river-glints">
            <rect x="396" y="304" width="34" height="2.4" rx="2" fill="#fbf5e8" fillOpacity="0.32" />
            <rect x="602" y="290" width="26" height="2.1" rx="2" fill="#d6b45d" fillOpacity="0.3" />
            <rect x="782" y="318" width="38" height="2.4" rx="2" fill="#fbf5e8" fillOpacity="0.3" />
            <rect x="1014" y="298" width="30" height="2.2" rx="2" fill="#d6b45d" fillOpacity="0.28" />
            <rect x="826" y="288" width="78" height="1.3" rx="1" fill="#f2deb0" fillOpacity="0.22" className="bridge-reflect" />
          </g>

          <g className="wrestler-mark">
            <path d="M1220 312c12-14 28-20 42-14 12 5 18 18 14 32-5 18-23 32-44 35-17 3-34-4-41-19-6-12-3-25 6-34 5-6 12-10 20-12 2-13 9-25 20-32 14-9 33-8 46 2l-9 11c-8-6-18-7-27-2-8 5-13 13-13 24 0 3 0 6 1 9z" fill="url(#wrestlerGrad)" />
            <path d="M1231 327c10 9 27 11 39 3" fill="none" stroke="#f9eccd" strokeOpacity="0.34" strokeWidth="2.1" strokeLinecap="round" />
          </g>
        </g>
      </svg>

      <style>{`
        .edirne-text-soften {
          background:
            linear-gradient(90deg, rgba(251, 245, 232, 0.36) 0%, rgba(251, 245, 232, 0.14) 36%, rgba(251, 245, 232, 0.02) 62%),
            linear-gradient(to bottom, rgba(251, 245, 232, 0.78), rgba(251, 245, 232, 0.36) 56%, rgba(251, 245, 232, 0.06));
          animation: sceneFade 3.2s ease-out both;
        }
        .dark .edirne-text-soften {
          background:
            linear-gradient(90deg, rgba(15, 12, 19, 0.42) 0%, rgba(15, 12, 19, 0.18) 36%, rgba(15, 12, 19, 0.04) 62%),
            linear-gradient(to bottom, rgba(15, 12, 19, 0.9), rgba(15, 12, 19, 0.56) 56%, rgba(15, 12, 19, 0.12));
        }

        .edirne-scene-enter { 
          animation: sceneRise 3.4s cubic-bezier(0.2, 0.7, 0.2, 1) both; 
        }
        .edirne-sun-pulse { 
          animation: glowPulse 7.5s ease-in-out infinite alternate; 
          will-change: transform, opacity;
        }
        .dark .edirne-sun-pulse { opacity: 0.72; }
        .edirne-halo { animation: haloPulse 7s ease-in-out infinite alternate; }

        .edirne-haze { filter: blur(1.1px); }
        .haze-1 { animation: hazeMoveA 22s ease-in-out infinite alternate; }
        .haze-2 { animation: hazeMoveB 26s ease-in-out infinite alternate; }

        .selimiye-fill { opacity: 0; animation: selimiyeFillIn 1.3s ease-out 0.45s forwards; }
        .selimiye-lines path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: drawLines 2.7s cubic-bezier(0.22, 0.78, 0.2, 1) 0.8s forwards;
        }

        .meric-bridge { animation: bridgeSettle 3s ease-out both; }

        .river-wave.wave-a { animation: flowA 24s linear infinite; will-change: transform; }
        .river-wave.wave-b { animation: flowB 19s linear infinite; will-change: transform; }
        .river-wave.wave-c { animation: flowC 29s linear infinite; will-change: transform; }

        .river-glints rect { animation: glintMove 6.4s ease-in-out infinite; }
        .river-glints rect:nth-child(2) { animation-delay: 0.8s; }
        .river-glints rect:nth-child(3) { animation-delay: 1.6s; }
        .river-glints rect:nth-child(4) { animation-delay: 2.4s; }
        .bridge-reflect { animation-duration: 7.8s !important; }

        .wrestler-mark {
          opacity: 0;
          transform-origin: 1242px 336px;
          animation: wrestlerReveal 1.6s ease-out 1s forwards;
          will-change: transform, opacity;
        }

        @keyframes sceneFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes sceneRise { from { opacity: 0; transform: translateY(11px) scale(1.01); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes glowPulse { from { opacity: 0.7; transform: scale(0.992); } to { opacity: 0.86; transform: scale(1.018); } }
        @keyframes haloPulse { from { opacity: 0.55; } to { opacity: 0.78; } }
        @keyframes selimiyeFillIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes drawLines { from { stroke-dashoffset: 1200; opacity: 0.24; } to { stroke-dashoffset: 0; opacity: 1; } }
        @keyframes bridgeSettle { from { opacity: 0.28; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes hazeMoveA { from { opacity: 0.24; transform: translateX(-20px); } to { opacity: 0.16; transform: translateX(22px); } }
        @keyframes hazeMoveB { from { opacity: 0.15; transform: translateX(22px); } to { opacity: 0.22; transform: translateX(-18px); } }
        @keyframes flowA { from { transform: translateX(-24px); } to { transform: translateX(24px); } }
        @keyframes flowB { from { transform: translateX(20px); } to { transform: translateX(-20px); } }
        @keyframes flowC { from { transform: translateX(-14px); } to { transform: translateX(14px); } }
        @keyframes glintMove { 0%,100% { opacity: 0.24; transform: translateY(0); } 50% { opacity: 0.5; transform: translateY(-1.5px); } }
        @keyframes wrestlerReveal { from { opacity: 0; transform: translateY(8px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

        @media (max-width: 640px) {
          .edirne-scene-enter { transform: translateY(4px) scale(0.95); transform-origin: center top; }
          .meric-bridge { opacity: 0.88; }
          .wrestler-mark { 
            animation: wrestlerRevealMobile 1.6s ease-out 1s forwards !important;
          }
          @keyframes wrestlerRevealMobile { 
            from { opacity: 0; transform: translate(-34px, 4px) scale(0.85); } 
            to { opacity: 1; transform: translate(-34px, -4px) scale(0.9); } 
          }
          .haze-2 { opacity: 0.7; }
        }

        @media (prefers-reduced-motion: reduce) {
          .edirne-text-soften,
          .edirne-scene-enter,
          .edirne-sun-pulse,
          .edirne-halo,
          .haze-1,
          .haze-2,
          .selimiye-fill,
          .selimiye-lines path,
          .meric-bridge,
          .river-wave.wave-a,
          .river-wave.wave-b,
          .river-wave.wave-c,
          .river-glints rect,
          .wrestler-mark {
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
