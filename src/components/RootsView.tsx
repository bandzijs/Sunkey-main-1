import React from 'react';
import { ChevronUp, Plus, ArrowRight } from 'lucide-react';
import { geneKeys } from '../data/geneKeys';
import { trigramRoots, trigramColors } from '../data/trigramColors';
import { TrigramPair } from '../data/geneKeyTrigrams';

interface RootsViewProps {
  geneKey: number;
  trigrams: TrigramPair;
  onBack: () => void;
}

export const RootsView: React.FC<RootsViewProps> = ({ geneKey, trigrams, onBack }) => {
  const rootGKA = trigramRoots[trigrams.top];
  const rootGKB = trigramRoots[trigrams.bottom];

  const rootDataA = geneKeys[rootGKA];
  const rootDataB = geneKeys[rootGKB];
  const selectedData = geneKeys[geneKey];

  const topColor = trigramColors[trigrams.top];
  const bottomColor = trigramColors[trigrams.bottom];

  return (
    <div className="space-y-12 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <ChevronUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" />
        <span>Back to Gene Key</span>
      </button>

      <div className="text-center">
        <h2 className="text-4xl font-light text-white mb-4">
          The Roots of Gene Key {geneKey}
        </h2>
        <p className="text-slate-400 text-lg">
          Understanding the composition through its trigram foundations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg border border-white/20"
              style={{ backgroundColor: topColor }}
            ></div>
            <div>
              <h3 className="text-2xl font-light text-white">
                Root GK {rootGKA}
              </h3>
              <p className="text-sm text-slate-400">{trigrams.top} Trigram</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs text-red-400 uppercase tracking-wider">Shadow</span>
              <p className="text-lg text-white mt-1">{rootDataA.shadow}</p>
            </div>
            <div>
              <span className="text-xs text-emerald-400 uppercase tracking-wider">Gift</span>
              <p className="text-lg text-white mt-1">{rootDataA.gift}</p>
            </div>
            <div>
              <span className="text-xs text-amber-400 uppercase tracking-wider">Siddhi</span>
              <p className="text-lg text-white mt-1">{rootDataA.siddhi}</p>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg border border-white/20"
              style={{ backgroundColor: bottomColor }}
            ></div>
            <div>
              <h3 className="text-2xl font-light text-white">
                Root GK {rootGKB}
              </h3>
              <p className="text-sm text-slate-400">{trigrams.bottom} Trigram</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs text-red-400 uppercase tracking-wider">Shadow</span>
              <p className="text-lg text-white mt-1">{rootDataB.shadow}</p>
            </div>
            <div>
              <span className="text-xs text-emerald-400 uppercase tracking-wider">Gift</span>
              <p className="text-lg text-white mt-1">{rootDataB.gift}</p>
            </div>
            <div>
              <span className="text-xs text-amber-400 uppercase tracking-wider">Siddhi</span>
              <p className="text-lg text-white mt-1">{rootDataB.siddhi}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-light text-white mb-8 text-center">
          Composition of Gene Key {geneKey}
        </h3>

        <div className="space-y-6">
          <div className="backdrop-blur-sm bg-red-950/10 p-6 rounded-xl border border-red-900/20">
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <span className="text-red-400 font-medium">Shadow:</span>
              <span className="text-slate-300">{rootDataA.shadow}</span>
              <Plus className="w-5 h-5 text-slate-500" />
              <span className="text-slate-300">{rootDataB.shadow}</span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="text-white font-medium">{selectedData.shadow}</span>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-emerald-950/10 p-6 rounded-xl border border-emerald-900/20">
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <span className="text-emerald-400 font-medium">Gift:</span>
              <span className="text-slate-300">{rootDataA.gift}</span>
              <Plus className="w-5 h-5 text-slate-500" />
              <span className="text-slate-300">{rootDataB.gift}</span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="text-white font-medium">{selectedData.gift}</span>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-amber-950/10 p-6 rounded-xl border border-amber-900/20">
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <span className="text-amber-400 font-medium">Siddhi:</span>
              <span className="text-slate-300">{rootDataA.siddhi}</span>
              <Plus className="w-5 h-5 text-slate-500" />
              <span className="text-slate-300">{rootDataB.siddhi}</span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="text-white font-medium">{selectedData.siddhi}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
