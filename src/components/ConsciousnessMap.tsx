import React, { useState } from 'react';
import { ChevronLeft, Grid3x3 } from 'lucide-react';
import { geneKeys } from '../data/geneKeys';

interface ConsciousnessMapProps {
  onBack: () => void;
  onSelectGeneKey: (geneKey: number) => void;
}

export const ConsciousnessMap: React.FC<ConsciousnessMapProps> = ({ onBack, onSelectGeneKey }) => {
  const [selectedKey, setSelectedKey] = useState<number | null>(null);

  const handleKeyClick = (keyNumber: number) => {
    setSelectedKey(keyNumber);
  };

  const handleViewDetails = () => {
    if (selectedKey) {
      onSelectGeneKey(selectedKey);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </button>

      <div className="text-center">
        <h2 className="text-4xl font-light text-white mb-4 flex items-center justify-center gap-3">
          <Grid3x3 className="w-10 h-10" />
          Consciousness Map
        </h2>
        <p className="text-slate-400 text-lg">
          All 64 Gene Keys with their frequency keywords
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 max-w-7xl mx-auto">
        {Array.from({ length: 64 }, (_, i) => i + 1).map((keyNumber) => {
          const data = geneKeys[keyNumber];
          const isSelected = selectedKey === keyNumber;

          return (
            <button
              key={keyNumber}
              onClick={() => handleKeyClick(keyNumber)}
              className={`
                backdrop-blur-sm p-4 rounded-xl border transition-all
                ${isSelected
                  ? 'bg-white/20 border-white/40 scale-105 shadow-lg'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }
              `}
            >
              <div className={`text-2xl font-light mb-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                {keyNumber}
              </div>
              <div className="text-xs space-y-1">
                <div className="text-red-400 truncate" title={data.shadow}>
                  {data.shadow}
                </div>
                <div className="text-emerald-400 truncate" title={data.gift}>
                  {data.gift}
                </div>
                <div className="text-amber-400 truncate" title={data.siddhi}>
                  {data.siddhi}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedKey && (
        <div className="max-w-2xl mx-auto backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20 animate-fade-in">
          <h3 className="text-3xl font-light text-white mb-6 text-center">
            Gene Key {selectedKey}
          </h3>

          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-red-950/20 p-6 rounded-xl border border-red-900/30">
              <div className="text-sm text-red-400 uppercase tracking-wider mb-2">Shadow</div>
              <div className="text-2xl text-white">{geneKeys[selectedKey].shadow}</div>
            </div>

            <div className="backdrop-blur-sm bg-emerald-950/20 p-6 rounded-xl border border-emerald-900/30">
              <div className="text-sm text-emerald-400 uppercase tracking-wider mb-2">Gift</div>
              <div className="text-2xl text-white">{geneKeys[selectedKey].gift}</div>
            </div>

            <div className="backdrop-blur-sm bg-amber-950/20 p-6 rounded-xl border border-amber-900/30">
              <div className="text-sm text-amber-400 uppercase tracking-wider mb-2">Siddhi</div>
              <div className="text-2xl text-white">{geneKeys[selectedKey].siddhi}</div>
            </div>

            <button
              onClick={handleViewDetails}
              className="w-full py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-sm text-white rounded-xl border border-white/20 transition-all font-light text-lg"
            >
              View Full Details & Roots
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
