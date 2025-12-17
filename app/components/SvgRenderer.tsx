import React from 'react';

// 👇 BAŞLARINA 'export' EKLEDİK
export type SvgElement = {
  t: 'rect' | 'circle' | 'line' | 'path'; 
  x?: number; y?: number; w?: number; h?: number;
  cx?: number; cy?: number; r?: number;
  x1?: number; y1?: number; x2?: number; y2?: number;
  d?: string;
  sw?: number;
  dash?: boolean;
};

// 👇 BAŞINA 'export' EKLEDİK
export type SvgData = {
  viewBox: string;
  elements: SvgElement[];
};

export default function SvgRenderer({ data, className }: { data: SvgData; className?: string }) {
  // ... dosyanın geri kalanı aynı ...
  if (!data) return null;

  return (
    <svg 
      viewBox={data.viewBox} 
      className={`w-full h-full ${className || ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {data.elements.map((el, i) => {
        const commonProps = {
          key: i,
          stroke: "currentColor", // Tailwind text rengini kullanır
          strokeWidth: el.sw || 4,
          fill: "none",
          strokeDasharray: el.dash ? "10,5" : undefined, // Kesik çizgi ayarı
          className: "transition-all duration-300"
        };

        switch (el.t) {
          case 'rect':
            return (
              <rect
                x={el.x} y={el.y} width={el.w} height={el.h}
                {...commonProps}
              />
            );
          case 'circle':
            return (
              <circle
                cx={el.cx} cy={el.cy} r={el.r}
                {...commonProps}
              />
            );
          case 'line':
            return (
              <line
                x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2}
                strokeLinecap="round"
                {...commonProps}
              />
            );
          case 'path':
            return (
              <path
                d={el.d}
                strokeLinejoin="round"
                strokeLinecap="round"
                {...commonProps}
              />
            );
          default:
            return null;
        }
      })}
    </svg>
  );
}
