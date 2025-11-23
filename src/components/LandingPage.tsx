import React, { useState } from 'react';
import { Sun } from 'lucide-react';

interface LandingPageProps {
  onCalculate: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onCalculate }) => {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthCity, setBirthCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sun className="w-20 h-20 text-amber-400 animate-pulse" strokeWidth={1.5} />
              <div className="absolute inset-0 blur-xl bg-amber-400 opacity-30 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-6xl font-light text-white mb-4 tracking-wide">
            SunKey
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Demo Prototype
          </p>
          <div className="mt-6 text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Discover the cosmic blueprint encoded in your birth moment.
            Enter your details below to unveil your unique Gene Key.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-200 tracking-wide">
              Date of Birth
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-200 tracking-wide">
              Time of Birth
            </label>
            <input
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-200 tracking-wide">
              City of Birth
            </label>
            <input
              type="text"
              value={birthCity}
              onChange={(e) => setBirthCity(e.target.value)}
              placeholder="Enter city name"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Find my SunKey
          </button>
        </form>

        <div className="mt-8 text-center text-slate-500 text-xs">
          This is a demonstration prototype for educational purposes
        </div>
      </div>
    </div>
  );
};
