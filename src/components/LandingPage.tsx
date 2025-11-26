import React from 'react';
import { Sun, Grid3x3, ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LandingPageProps {
  onCalculate: (geneKey?: number) => void;
  onShowMap: () => void;
  onHome: () => void;
  onGetMySunKey: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onCalculate, onShowMap, onHome, onGetMySunKey }) => {
  const handleHome = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Call parent handler
    onHome();
  };

  return (
    <div className="min-h-screen">
      <Navbar onHome={handleHome} onShowMap={onShowMap} onCalculate={onCalculate} />

      {/* Hero Section */}
      <div className="pt-16 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Logo and Title */}
          <div className="mb-12 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Sun className="w-32 h-32 text-amber-400 animate-pulse" strokeWidth={1.5} />
                <div className="absolute inset-0 blur-2xl bg-amber-400 opacity-30 animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-7xl md:text-8xl font-light text-white mb-6 tracking-wide">
              SunKey
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8">
              Discover Your Cosmic Blueprint
            </p>
            <div className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              Unlock the secrets encoded in your birth moment through the ancient wisdom of the Gene Keys. 
              Explore the 64 pathways of transformation and discover your unique cosmic signature.
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-12">
            <button
              onClick={(e) => {
                e.preventDefault();
                onGetMySunKey();
              }}
              className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 active:scale-95"
            >
              <span>Get My SunKey</span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                onCalculate();
              }}
              className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore the Wheel
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                onShowMap();
              }}
              className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Grid3x3 className="w-5 h-5" />
              Consciousness Map
            </button>
          </div>
        </div>
      </div>

      {/* Empty Section */}
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full">
          {/* Empty section placeholder */}
        </div>
      </div>

      <Footer onHome={handleHome} onShowMap={onShowMap} onCalculate={onCalculate} />
    </div>
  );
};
