import React from 'react';

export type SvgElement = {
  t: 'rect' | 'circle' | 'line' | 'path'; 
  x?: number; y?: number; w?: number; h?: number;
  cx?: number; cy?: number; r?: number;
  x1?: number; y1?: number; x2?: number; y2?: number;
  d?: string;
  sw?: number;
  dash?: boolean;
};

export type SvgData = {
  viewBox: string;
  elements: SvgElement[];
};

export default function SvgRenderer({ data, className }: { data: SvgData; className?: string }) {
  // 1. GÜVENLİK KONTROLÜ: Veri hiç yoksa veya elements dizisi yoksa çökme, boş dön.
  if (!data || !data.elements || !Array.isArray(data.elements)) {
    return null; 
  }

  return (
    <svg 
      viewBox={data.viewBox || "0 0 100 100"} // viewBox yoksa varsayılan değer ata
      className={`w-full h-full ${className || ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {data.elements.map((el, i) => {
        // Her eleman için temel özellikleri hazırla
        const commonProps = {
          key: i,
          stroke: "currentColor",
          strokeWidth: el.sw || 4,
          fill: "none",
          strokeDasharray: el.dash ? "10,5" : undefined,
          className: "transition-all duration-300"
        };

        switch (el.t) {
          case 'rect':
            // rect çizmek için x,y,w,h lazım. Yoksa çizme.
            if (el.w === undefined || el.h === undefined) return null;
            return (
              <rect
                x={el.x || 0} y={el.y || 0} width={el.w} height={el.h}
                {...commonProps}
              />
            );
          case 'circle':
             // circle çizmek için r lazım.
            if (el.r === undefined) return null;
            return (
              <circle
                cx={el.cx || 0} cy={el.cy || 0} r={el.r}
                {...commonProps}
              />
            );
          case 'line':
            return (
              <line
                x1={el.x1 || 0} y1={el.y1 || 0} x2={el.x2 || 0} y2={el.y2 || 0}
                strokeLinecap="round"
                {...commonProps}
              />
            );
          case 'path':
            if (!el.d) return null;
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
