export default function AnimatedEdirneIntro() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[300px] overflow-hidden sm:h-[350px] lg:h-[410px]"
    >
      <div className="edirne-overlay absolute inset-0" />

      <svg viewBox="0 0 1440 430" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="sunCore" cx="50%" cy="25%" r="48%">
            <stop offset="0%" stopColor="#d6b45d" stopOpacity="0.62" />
            <stop offset="44%" stopColor="#d6b45d" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#d6b45d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="domeLight" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fbf5e8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#fbf5e8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cityFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a1f2b" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1d2f57" stopOpacity="0.42" />
          </linearGradient>
          <linearGradient id="selimiyeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d2f57" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1d2f57" stopOpacity="0.82" />
          </linearGradient>
          <linearGradient id="riverBand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4f7d3a" stopOpacity="0.42" />
            <stop offset="48%" stopColor="#1d2f57" stopOpacity="0.54" />
            <stop offset="100%" stopColor="#4f7d3a" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="riverFoam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fbf5e8" stopOpacity="0.26" />
            <stop offset="60%" stopColor="#d6b45d" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#fbf5e8" stopOpacity="0.24" />
          </linearGradient>
          <linearGradient id="wrestlerFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d6b45d" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7a1f2b" stopOpacity="0.85" />
          </linearGradient>
          <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="miniBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
          <pattern id="grain" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="3" r="0.8" fill="#1d2f57" fillOpacity="0.08" />
            <circle cx="11" cy="8" r="0.9" fill="#7a1f2b" fillOpacity="0.07" />
            <circle cx="16" cy="14" r="0.7" fill="#4f7d3a" fillOpacity="0.08" />
          </pattern>
        </defs>

        <g className="scene-intro">
          <ellipse cx="720" cy="94" rx="420" ry="145" fill="url(#sunCore)" className="sun-pulse" />

          <g className="mist-layer mist-back">
            <ellipse cx="380" cy="168" rx="270" ry="46" fill="#fbf5e8" fillOpacity="0.32" />
            <ellipse cx="950" cy="156" rx="300" ry="44" fill="#fbf5e8" fillOpacity="0.28" />
          </g>

          <g className="far-city">
            <path d="M90 236L90 205L170 205L170 228L216 228L216 194L282 194L282 232L330 232L330 202L418 202L418 236Z" fill="url(#cityFar)" />
            <path d="M1030 236L1030 204L1098 204L1098 228L1162 228L1162 190L1240 190L1240 232L1330 232L1330 236Z" fill="url(#cityFar)" />
          </g>

          <g className="selimiye-shadow" filter="url(#softBlur)">
            <path d="M310 236h820v28H310z" fill="#1d2f57" fillOpacity="0.28" />
            <path d="M520 236c28-72 176-72 204 0z" fill="#7a1f2b" fillOpacity="0.24" />
            <path d="M548 236V126h22v110M674 236V126h22v110" fill="#1d2f57" fillOpacity="0.25" />
          </g>

          <g className="selimiye-fill">
            <path d="M320 236h792v20H320z" fill="url(#selimiyeFill)" fillOpacity="0.78" />
            <path d="M492 236c30-86 228-86 258 0z" fill="url(#selimiyeFill)" />
            <ellipse cx="620" cy="176" rx="74" ry="32" fill="url(#domeLight)" />
            <path d="M402 236V170h58v66zM448 170c0-20 12-30 12-30s12 10 12 30" fill="#1d2f57" fillOpacity="0.7" />
            <path d="M770 236V168h62v68zM820 168c0-21 12-31 12-31s12 10 12 31" fill="#1d2f57" fillOpacity="0.72" />
            <path d="M548 236V126h22v110h-22zM674 236V126h22v110h-22z" fill="#1d2f57" fillOpacity="0.78" />
            <path d="M554 126V82M685 126V82" stroke="#d6b45d" strokeOpacity="0.62" strokeWidth="3" strokeLinecap="round" />
          </g>

          <g className="selimiye-lines text-[#fbf5e8]/80 dark:text-[#f3d9a4]/65">
            <path d="M310 236H1130" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M492 236c30-86 228-86 258 0" fill="none" stroke="currentColor" strokeWidth="4.6" strokeLinecap="round" />
            <path d="M548 236V126h22v110M674 236V126h22v110M554 126V82M685 126V82" fill="none" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M402 236V170h58v66M770 236V168h62v68" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
          </g>

          <g className="mist-layer mist-front">
            <ellipse cx="706" cy="200" rx="320" ry="52" fill="#fbf5e8" fillOpacity="0.22" />
            <ellipse cx="1090" cy="208" rx="220" ry="40" fill="#fbf5e8" fillOpacity="0.2" />
          </g>

          <g className="river-base">
            <path d="M-20 246h1480v192H-20z" fill="url(#riverBand)" />
            <rect x="-20" y="246" width="1480" height="192" fill="url(#grain)" opacity="0.38" />
          </g>

          <g className="wave layer-1">
            <path d="M-30 286c210-34 320 28 528-6 194-31 318 28 520 4 194-22 300-6 470 14" fill="none" stroke="url(#riverFoam)" strokeWidth="10" />
          </g>
          <g className="wave layer-2">
            <path d="M-50 316c214-30 328 21 532-4 190-24 322 22 520 6 180-15 306 0 472 18" fill="none" stroke="#1d2f57" strokeOpacity="0.36" strokeWidth="8" />
          </g>
          <g className="wave layer-3">
            <path d="M-40 344c196-24 308 16 500-2 184-18 314 18 500 10 178-8 300 8 466 22" fill="none" stroke="#4f7d3a" strokeOpacity="0.34" strokeWidth="7" />
          </g>

          <g className="river-glints">
            <ellipse cx="412" cy="304" rx="11" ry="2.3" fill="#fbf5e8" fillOpacity="0.42" />
            <ellipse cx="606" cy="287" rx="9" ry="2" fill="#d6b45d" fillOpacity="0.34" />
            <ellipse cx="812" cy="315" rx="10" ry="2.1" fill="#fbf5e8" fillOpacity="0.38" />
            <ellipse cx="1038" cy="296" rx="12" ry="2.3" fill="#d6b45d" fillOpacity="0.3" />
          </g>

          <g className="shore-front">
            <path d="M-20 360c220-20 352 30 556 14 196-15 328 12 528 6 182-6 282 12 396 22v46H-20z" fill="#1d2f57" fillOpacity="0.26" />
            <path d="M50 366c16-20 36-20 52 0M96 366c14-18 30-18 42 0M1180 372c15-20 30-20 46 0M1218 372c14-16 30-16 40 0" fill="none" stroke="#4f7d3a" strokeOpacity="0.5" strokeWidth="2.6" strokeLinecap="round" className="shore-parallax" />
          </g>

          <g className="wrestler-group" filter="url(#miniBlur)">
            <path d="M1258 335c10-6 24-5 31 2 7 7 8 18 2 27-8 12-24 16-38 11-10-4-17-13-16-24 1-8 7-13 14-16 0-10 4-19 11-25 9-7 22-8 33-1l-7 9c-6-4-13-4-18 0-5 4-7 10-6 17z" fill="url(#wrestlerFill)" opacity="0.92" />
            <path d="M1260 342c9 7 22 6 30-2" fill="none" stroke="#fbf5e8" strokeOpacity="0.42" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>

      <style>{`
        .edirne-overlay {
          background: linear-gradient(to bottom, rgba(251, 245, 232, 0.82), rgba(251, 245, 232, 0.4) 56%, rgba(251, 245, 232, 0.06));
          animation: introFade 3.8s ease-out both;
        }
        .dark .edirne-overlay {
          background: linear-gradient(to bottom, rgba(15, 12, 19, 0.9), rgba(15, 12, 19, 0.58) 56%, rgba(15, 12, 19, 0.12));
        }

        .scene-intro { animation: introRise 3.6s cubic-bezier(0.2, 0.7, 0.18, 1) both; }
        .sun-pulse { animation: sunPulse 9s ease-in-out infinite alternate; }

        .mist-layer { filter: blur(1.2px); }
        .mist-back { animation: mistSwayA 24s ease-in-out infinite alternate; }
        .mist-front { animation: mistSwayB 20s ease-in-out infinite alternate; }

        .selimiye-fill { opacity: 0; animation: fillReveal 1.6s ease-out 0.45s forwards; }
        .selimiye-lines path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: lineDraw 3.4s cubic-bezier(0.2, 0.75, 0.2, 1) 0.9s forwards;
        }

        .wave.layer-1 { animation: riverFlowA 26s linear infinite; }
        .wave.layer-2 { animation: riverFlowB 20s linear infinite; }
        .wave.layer-3 { animation: riverFlowC 30s linear infinite; }

        .river-glints ellipse { animation: glint 7s ease-in-out infinite; }
        .river-glints ellipse:nth-child(2) { animation-delay: 1.1s; }
        .river-glints ellipse:nth-child(3) { animation-delay: 2.2s; }
        .river-glints ellipse:nth-child(4) { animation-delay: 3.2s; }

        .shore-parallax { animation: shoreShift 16s ease-in-out infinite alternate; }

        .wrestler-group {
          opacity: 0;
          transform-origin: 1268px 338px;
          animation: wrestlerReveal 1.9s ease-out 1s forwards;
        }

        @keyframes introFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes introRise { from { opacity: 0; transform: translateY(12px) scale(1.01); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes sunPulse { from { opacity: 0.7; transform: scale(0.985); } to { opacity: 0.9; transform: scale(1.02); } }
        @keyframes fillReveal { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lineDraw { from { stroke-dashoffset: 1200; opacity: 0.3; } to { stroke-dashoffset: 0; opacity: 1; } }
        @keyframes mistSwayA { from { opacity: 0.32; transform: translateX(-26px); } to { opacity: 0.22; transform: translateX(24px); } }
        @keyframes mistSwayB { from { opacity: 0.24; transform: translateX(20px); } to { opacity: 0.34; transform: translateX(-20px); } }
        @keyframes riverFlowA { from { transform: translateX(-30px); } to { transform: translateX(30px); } }
        @keyframes riverFlowB { from { transform: translateX(22px); } to { transform: translateX(-22px); } }
        @keyframes riverFlowC { from { transform: translateX(-16px); } to { transform: translateX(16px); } }
        @keyframes glint { 0%,100% { opacity: 0.24; transform: translateY(0); } 50% { opacity: 0.6; transform: translateY(-2px); } }
        @keyframes shoreShift { from { transform: translateX(-6px); } to { transform: translateX(6px); } }
        @keyframes wrestlerReveal {
          from { opacity: 0; transform: translateY(9px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .edirne-overlay,
          .scene-intro,
          .sun-pulse,
          .mist-back,
          .mist-front,
          .selimiye-fill,
          .selimiye-lines path,
          .wave.layer-1,
          .wave.layer-2,
          .wave.layer-3,
          .river-glints ellipse,
          .shore-parallax,
          .wrestler-group {
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
