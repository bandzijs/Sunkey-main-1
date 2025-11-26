import React, { useState } from 'react';
import { cities } from '../data/cities';
import { countries } from '../data/countries';
import { getCityCoordinates } from '../data/city-coordinates';
import { calculateGeneKey } from '../utils/astronomy-calculator';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export interface BirthDataResult {
  geneKey: number;
  sunLongitude: number;
  sunSign: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  birthCountry: string;
  latitude: number;
  longitude: number;
}

interface GetMySunKeyProps {
  onCalculate: (geneKey?: number, birthData?: BirthDataResult) => void;
  onShowMap: () => void;
  onHome: () => void;
}

export const GetMySunKey: React.FC<GetMySunKeyProps> = ({ onCalculate, onShowMap, onHome }) => {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthCity, setBirthCity] = useState('');
  const [birthCountry, setBirthCountry] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsCalculating(true);

    try {
      // Get city coordinates
      const [latitude, longitude] = getCityCoordinates(birthCity);

      if (latitude === 0 && longitude === 0) {
        setError('City coordinates not found. Please select a different city.');
        setIsCalculating(false);
        return;
      }

      // Calculate Gene Key using astronomy
      const result = calculateGeneKey({
        date: birthDate,
        time: birthTime,
        latitude,
        longitude
      });

      console.log('Astronomy calculation result:', result);

      // Prepare birth data result
      const birthDataResult: BirthDataResult = {
        geneKey: result.geneKey,
        sunLongitude: result.sunLongitude,
        sunSign: result.sunSign,
        birthDate,
        birthTime,
        birthCity,
        birthCountry,
        latitude,
        longitude
      };

      // Pass the calculated Gene Key and birth data to parent
      onCalculate(result.geneKey, birthDataResult);
    } catch (err) {
      console.error('Error calculating Gene Key:', err);
      setError('An error occurred during calculation. Please try again.');
    } finally {
      setIsCalculating(false);
    }
  };

  const handleHome = () => {
    // Reset form fields
    setBirthDate('');
    setBirthTime('');
    setBirthCity('');
    setBirthCountry('');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Call parent handler
    onHome();
  };

  return (
    <div className="min-h-screen">
      <Navbar onHome={handleHome} onShowMap={onShowMap} onCalculate={onCalculate} />

      {/* Main Content with padding for navbar */}
      <div className="pt-16 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-light text-white mb-4 tracking-wide">
              Get My SunKey
            </h1>
            <p className="text-xl text-slate-300 font-light mb-6">
              Discover the cosmic blueprint encoded in your birth moment
            </p>
            <div className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
              Enter your birth details below to unveil your unique Gene Key.
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
              <select
                value={birthCity}
                onChange={(e) => setBirthCity(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                required
              >
                <option value="" disabled>Select city</option>
                {cities.map((city) => (
                  <option key={city} value={city} className="bg-slate-900">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-200 tracking-wide">
                Country of Birth
              </label>
              <select
                value={birthCountry}
                onChange={(e) => setBirthCountry(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                required
              >
                <option value="" disabled>Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country} className="bg-slate-900">
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isCalculating}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isCalculating ? 'Calculating...' : 'Find my SunKey'}
            </button>
          </form>
        </div>
      </div>

      <Footer onHome={handleHome} onShowMap={onShowMap} onCalculate={onCalculate} />
    </div>
  );
};

