import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { geneKeys } from '../data/geneKeys';
import { geneKeyTrigrams } from '../data/geneKeyTrigrams';
import { trigramColors, trigramRoots } from '../data/trigramColors';
import { GeneKeyWheel } from './GeneKeyWheel';
import { RootsView } from './RootsView';

interface ResultPageProps {
  geneKey: number;
  onReset: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({ geneKey, onReset }) => {
  const [showRoots, setShowRoots] = useState(false);

  const data = geneKeys[geneKey];
  const trigrams = geneKeyTrigrams[geneKey];
  const topColor = trigramColors[trigrams.top];
  const bottomColor = trigramColors[trigrams.bottom];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onReset}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          <span>New Reading</span>
        </button>

        {!showRoots ? (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center">
              <h2 className="text-5xl font-light text-white mb-6">
                Your SunKey is Gene Key {geneKey}
              </h2>
              <div className="inline-flex items-center gap-3 text-slate-300 text-lg">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border border-white/20"
                    style={{ backgroundColor: topColor }}
                  ></div>
                  <span className="text-sm">{trigrams.top}</span>
                </div>
                <span className="text-slate-500">over</span>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border border-white/20"
                    style={{ backgroundColor: bottomColor }}
                  ></div>
                  <span className="text-sm">{trigrams.bottom}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <GeneKeyWheel selectedGeneKey={geneKey} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-sm bg-red-950/20 p-8 rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all">
                <h3 className="text-red-400 text-sm font-medium tracking-wider uppercase mb-3">
                  Shadow
                </h3>
                <p className="text-white text-2xl font-light">
                  {data.shadow}
                </p>
              </div>

              <div className="backdrop-blur-sm bg-emerald-950/20 p-8 rounded-2xl border border-emerald-900/30 hover:border-emerald-700/50 transition-all">
                <h3 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">
                  Gift
                </h3>
                <p className="text-white text-2xl font-light">
                  {data.gift}
                </p>
              </div>

              <div className="backdrop-blur-sm bg-amber-950/20 p-8 rounded-2xl border border-amber-900/30 hover:border-amber-700/50 transition-all">
                <h3 className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-3">
                  Siddhi
                </h3>
                <p className="text-white text-2xl font-light">
                  {data.siddhi}
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <button
                onClick={() => setShowRoots(true)}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-slate-500/30 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="text-lg">See the roots of the code</span>
                <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <RootsView
            geneKey={geneKey}
            trigrams={trigrams}
            onBack={() => setShowRoots(false)}
          />
        )}
      </div>
    </div>
  );
};
