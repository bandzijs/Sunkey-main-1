import React from 'react';
import { geneKeyOrder } from '../data/geneKeyOrder';
import { geneKeyTrigrams } from '../data/geneKeyTrigrams';
import { trigramColors } from '../data/trigramColors';

interface GeneKeyWheelProps {
  selectedGeneKey: number;
}

export const GeneKeyWheel: React.FC<GeneKeyWheelProps> = ({ selectedGeneKey }) => {
  const size = 500;
  const center = size / 2;
  const outerRadius = size / 2 - 20;
  const innerRadius = size / 5;
  const textRadius = outerRadius + 12;

  const selectedIndex = geneKeyOrder.indexOf(selectedGeneKey);

  const createSlicePath = (index: number, isTop: boolean) => {
    const sliceAngle = (2 * Math.PI) / 64;
    const startAngle = -index * sliceAngle - Math.PI / 2;
    const endAngle = -(index + 1) * sliceAngle - Math.PI / 2;

    const radius = isTop ? outerRadius : (outerRadius + innerRadius) / 2;
    const midRadius = isTop ? (outerRadius + innerRadius) / 2 : innerRadius;

    const x1 = center + Math.cos(startAngle) * radius;
    const y1 = center + Math.sin(startAngle) * radius;
    const x2 = center + Math.cos(endAngle) * radius;
    const y2 = center + Math.sin(endAngle) * radius;
    const x3 = center + Math.cos(endAngle) * midRadius;
    const y3 = center + Math.sin(endAngle) * midRadius;
    const x4 = center + Math.cos(startAngle) * midRadius;
    const y4 = center + Math.sin(startAngle) * midRadius;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 0 ${x2} ${y2} L ${x3} ${y3} A ${midRadius} ${midRadius} 0 0 1 ${x4} ${y4} Z`;
  };

  const getTextPosition = (index: number) => {
    const sliceAngle = (2 * Math.PI) / 64;
    const midAngle = -index * sliceAngle - sliceAngle / 2 - Math.PI / 2;
    const x = center + Math.cos(midAngle) * textRadius;
    const y = center + Math.sin(midAngle) * textRadius;
    const rotation = (midAngle * 180) / Math.PI + 90;

    return { x, y, rotation };
  };

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        className="drop-shadow-2xl"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {geneKeyOrder.map((gk, index) => {
          const trigrams = geneKeyTrigrams[gk];
          const topColor = trigramColors[trigrams.top];
          const bottomColor = trigramColors[trigrams.bottom];
          const isSelected = index === selectedIndex;
          const textPos = getTextPosition(index);

          return (
            <g key={index}>
              <path
                d={createSlicePath(index, true)}
                fill={topColor}
                stroke={isSelected ? "#fbbf24" : "#1e293b"}
                strokeWidth={isSelected ? "3" : "0.5"}
                opacity={isSelected ? 1 : 0.85}
                filter={isSelected ? "url(#glow)" : undefined}
              />
              <path
                d={createSlicePath(index, false)}
                fill={bottomColor}
                stroke={isSelected ? "#fbbf24" : "#1e293b"}
                strokeWidth={isSelected ? "3" : "0.5"}
                opacity={isSelected ? 1 : 0.85}
                filter={isSelected ? "url(#glow)" : undefined}
              />
              <text
                x={textPos.x}
                y={textPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                className={`text-[9px] font-medium ${
                  isSelected ? 'fill-amber-400' : 'fill-slate-400'
                }`}
              >
                {gk}
              </text>
            </g>
          );
        })}

        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          fill="#0f172a"
          stroke="#334155"
          strokeWidth="2"
        />

        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-5xl font-light fill-white"
        >
          {selectedGeneKey}
        </text>
      </svg>

      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-radial from-amber-400 to-transparent"></div>
    </div>
  );
};
