export default function AnimatedEdirneIntro() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[260px] overflow-hidden sm:h-[300px] lg:h-[340px]"
    >
      <div className="edirne-intro-fade absolute inset-0" />

      <div className="edirne-intro-glow absolute left-1/2 top-0 h-36 w-[90%] -translate-x-1/2 rounded-full sm:h-44" />

      <svg viewBox="0 0 1200 320" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <path
          d="M160 190h80M240 190V138h38v52M278 138h60v52M355 190V108h36v82M391 190V108h36v82M373 108c0-36 36-36 36 0M486 190c18-52 90-52 108 0M640 190V130h68v60M674 130V70M780 190c24-70 124-70 148 0M980 190v-42h74v42"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1d2f57]/70 dark:text-[#d9d0bf]/55 edirne-intro-line"
        />
        <path
          d="M120 202h960"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#7a1f2b]/45 dark:text-[#f2dca5]/40"
        />

        <g className="text-[#d6b45d]/80 dark:text-[#efcf76]/75 edirne-intro-wrestler">
          <circle cx="1050" cy="212" r="6" fill="currentColor" />
          <path d="M1042 228c4-8 14-8 18 0M1040 244c6-11 22-11 28 0M1052 228v23M1060 228v23" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g className="edirne-intro-wave-slow">
          <path
            d="M0 244c140-18 236 22 374-2 155-27 250 27 402 1 143-25 242-13 424 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
            className="text-[#4f7d3a]/45 dark:text-[#86b170]/45"
          />
        </g>
        <g className="edirne-intro-wave-fast">
          <path
            d="M-10 272c155-22 254 19 390-4 136-24 237 24 379 3 137-20 227-4 451 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            className="text-[#1d2f57]/30 dark:text-[#8a9fcf]/35"
          />
        </g>
      </svg>

      <style>{`
        .edirne-intro-fade {
          animation: edirneIntroReveal 3.8s ease-out both;
          background: linear-gradient(
            to bottom,
            rgba(251, 245, 232, 0.86) 0%,
            rgba(251, 245, 232, 0.58) 50%,
            rgba(251, 245, 232, 0) 100%
          );
        }

        .dark .edirne-intro-fade {
          background: linear-gradient(
            to bottom,
            rgba(15, 12, 19, 0.85) 0%,
            rgba(15, 12, 19, 0.55) 50%,
            rgba(15, 12, 19, 0) 100%
          );
        }

        .edirne-intro-glow {
          animation: edirneGlowPulse 4.2s ease-in-out infinite alternate;
          background: radial-gradient(circle, rgba(214, 180, 93, 0.35) 0%, rgba(214, 180, 93, 0.04) 70%, transparent 100%);
        }

        .edirne-intro-line {
          animation: edirneIntroReveal 3.4s cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .edirne-intro-wave-slow {
          animation: edirneWaveMove 16s linear infinite;
          transform-origin: center;
        }

        .edirne-intro-wave-fast {
          animation: edirneWaveMoveReverse 11s linear infinite;
          transform-origin: center;
        }

        .edirne-intro-wrestler {
          animation: edirneIntroReveal 3.7s ease-out both;
        }

        @keyframes edirneIntroReveal {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes edirneGlowPulse {
          0% { opacity: 0.35; transform: translateX(-50%) scale(1); }
          100% { opacity: 0.65; transform: translateX(-50%) scale(1.06); }
        }

        @keyframes edirneWaveMove {
          0% { transform: translateX(-28px); }
          100% { transform: translateX(28px); }
        }

        @keyframes edirneWaveMoveReverse {
          0% { transform: translateX(20px); }
          100% { transform: translateX(-20px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .edirne-intro-fade,
          .edirne-intro-glow,
          .edirne-intro-line,
          .edirne-intro-wave-slow,
          .edirne-intro-wave-fast,
          .edirne-intro-wrestler {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  )
}
