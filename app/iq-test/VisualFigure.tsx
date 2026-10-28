import { useId } from 'react';
import type { VisualElement, VisualFigureData } from '../data/questions';

function Element({ item }: { item: VisualElement }) {
  const props = { fill: 'fill' in item && item.fill ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: item.strokeWidth ?? 2.3, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const };
  switch (item.kind) {
    case 'circle': return <circle cx={item.cx} cy={item.cy} r={item.r} {...props} />;
    case 'rect': return <rect x={item.x} y={item.y} width={item.width} height={item.height} {...props} />;
    case 'path': return <path d={item.d} {...props} />;
    case 'line': return <line x1={item.x1} y1={item.y1} x2={item.x2} y2={item.y2} {...props} strokeDasharray={item.dashed ? '4 4' : undefined} />;
  }
}

/** Semantic, zoom-safe SVG. Shapes use position/fill, never colour alone. */
export default function VisualFigure({ figure, className = '', label }: { figure: VisualFigureData; className?: string; label?: string }) {
  const titleId = useId();
  const columns = Math.max(1, figure.columns);
  const rows = Math.ceil(figure.cells.length / columns);
  const cellHeight = figure.sequence ? 121 : 108;
  return (
    <svg role="img" aria-labelledby={titleId} viewBox={`0 0 ${columns * 108 + 4} ${rows * cellHeight + 4}`} xmlns="http://www.w3.org/2000/svg" className={`block h-auto w-full ${className}`} focusable="false">
      <title id={titleId}>{label ?? figure.label}</title>
      {figure.cells.map((cell, i) => (
        <g key={i} transform={`translate(${i % columns * 108 + 4} ${Math.floor(i / columns) * cellHeight + 4})`}>
          <rect x="1" y="1" width="98" height="98" rx="7" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" strokeDasharray={cell ? undefined : '5 4'} />
          {cell ? cell.elements.map((item, j) => <Element key={j} item={item} />) : <text x="50" y="63" fontSize="39" fontFamily="sans-serif" textAnchor="middle" fill="currentColor">?</text>}
          {figure.sequence && <text x="50" y="114" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fill="currentColor">{i + 1}</text>}
        </g>
      ))}
    </svg>
  );
}
