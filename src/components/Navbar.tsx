import React from 'react';
import { Sun, Grid3x3, Home } from 'lucide-react';

interface NavbarProps {
  onHome: () => void;
  onShowMap: () => void;
  onCalculate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHome, onShowMap, onCalculate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand - Clickable Home Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onHome();
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 group"
            title="Go to Home"
          >
            <div className="relative">
              <Sun className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" strokeWidth={1.5} />
              <div className="absolute inset-0 blur-md bg-amber-400 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <span className="text-2xl font-light text-white tracking-wide group-hover:text-amber-100 transition-colors">SunKey</span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                onHome();
              }}
              className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 border border-transparent hover:border-slate-700"
              title="Home"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Home</span>
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                onShowMap();
              }}
              className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 border border-transparent hover:border-slate-700"
              title="Consciousness Map"
            >
              <Grid3x3 className="w-5 h-5" />
              <span className="hidden sm:inline">Map</span>
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                onCalculate();
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-500/80 to-amber-600/80 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-amber-500/50 transform hover:scale-105 active:scale-95"
              title="Explore the Wheel"
            >
              <span className="hidden sm:inline">Explore</span>
              <span className="sm:hidden">Wheel</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

