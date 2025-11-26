import React from 'react';
import { Sun, Github, ExternalLink } from 'lucide-react';

interface FooterProps {
  onHome: () => void;
  onShowMap: () => void;
  onCalculate: (geneKey?: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onHome, onShowMap, onCalculate }) => {
  return (
    <footer className="border-t border-white/10 bg-slate-900/80 backdrop-blur-md mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Sun className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                <div className="absolute inset-0 blur-md bg-amber-400 opacity-20"></div>
              </div>
              <span className="text-xl font-light text-white tracking-wide">SunKey</span>
            </div>
            <p className="text-slate-400 text-sm text-center md:text-left max-w-xs">
              Discover the cosmic blueprint encoded in your birth moment through the Gene Keys mandala.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onHome();
                }}
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors text-center md:text-left"
              >
                Home
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onShowMap();
                }}
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors text-center md:text-left"
              >
                Consciousness Map
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onCalculate();
                }}
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors text-center md:text-left"
              >
                Explore the Wheel
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/bandzijs/Sunkey-main-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 text-center md:text-left"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-slate-500 text-xs mt-2 text-center md:text-left">
                Demo Prototype
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} SunKey. This is a demonstration prototype for educational purposes.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-xs">Gene Keys Visualization</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

