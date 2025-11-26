import { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { GetMySunKey, BirthDataResult } from './components/GetMySunKey';
import { ResultPage } from './components/ResultPage';
import { ConsciousnessMap } from './components/ConsciousnessMap';
import { geneKeyOrder } from './data/geneKeyOrder';

type View = 'landing' | 'get-my-sunkey' | 'result' | 'map';

// Helper functions to parse URL
const getViewFromUrl = (): View => {
  const hash = window.location.hash.slice(1);
  if (hash === 'map') return 'map';
  if (hash === 'get-my-sunkey') return 'get-my-sunkey';
  if (hash.startsWith('result')) {
    const match = hash.match(/result-(\d+)/);
    if (match) {
      const geneKey = parseInt(match[1], 10);
      if (geneKey >= 1 && geneKey <= 64) {
        return 'result';
      }
    }
  }
  return 'landing';
};

const getGeneKeyFromUrl = (): number | null => {
  const hash = window.location.hash.slice(1);
  const match = hash.match(/result-(\d+)/);
  if (match) {
    const geneKey = parseInt(match[1], 10);
    if (geneKey >= 1 && geneKey <= 64) {
      return geneKey;
    }
  }
  return null;
};

function App() {
  const [selectedGK, setSelectedGK] = useState<number | null>(() => getGeneKeyFromUrl());
  const [currentView, setCurrentView] = useState<View>(() => getViewFromUrl());
  const [birthData, setBirthData] = useState<BirthDataResult | null>(null);

  // Sync URL with state changes (only when state actually changes)
  useEffect(() => {
    const currentHash = window.location.hash.slice(1);
    let targetHash = '';

    if (currentView === 'landing') {
      targetHash = '';
    } else if (currentView === 'get-my-sunkey') {
      targetHash = 'get-my-sunkey';
    } else if (currentView === 'map') {
      targetHash = 'map';
    } else if (currentView === 'result' && selectedGK !== null) {
      targetHash = `result-${selectedGK}`;
    }

    // Only update URL if it's different from current
    if (currentHash !== targetHash) {
      if (targetHash === '') {
        window.history.pushState({ view: 'landing' }, '', window.location.pathname);
      } else {
        window.history.pushState({ view: currentView, geneKey: selectedGK }, '', window.location.pathname + '#' + targetHash);
      }
    }
  }, [currentView, selectedGK]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const view = getViewFromUrl();
      const geneKey = getGeneKeyFromUrl();
      setCurrentView(view);
      setSelectedGK(geneKey);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleCalculate = (geneKey?: number, birthDataResult?: BirthDataResult) => {
    if (geneKey) {
      // Use the calculated Gene Key from birth data
      setSelectedGK(geneKey);
      setBirthData(birthDataResult || null);
    } else {
      // Random selection for "Explore the Wheel" feature
      const randomIndex = Math.floor(Math.random() * 64);
      const gk = geneKeyOrder[randomIndex];
      setSelectedGK(gk);
      setBirthData(null); // Clear birth data for random selection
    }
    setCurrentView('result');
  };

  const handleReset = () => {
    setSelectedGK(null);
    setCurrentView('landing');
  };

  const handleShowMap = () => {
    setCurrentView('map');
  };

  const handleGetMySunKey = () => {
    setCurrentView('get-my-sunkey');
  };

  const handleSelectFromMap = (geneKey: number) => {
    setSelectedGK(geneKey);
    setCurrentView('result');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {currentView === 'landing' && (
        <LandingPage onCalculate={handleCalculate} onShowMap={handleShowMap} onHome={handleReset} onGetMySunKey={handleGetMySunKey} />
      )}
      {currentView === 'get-my-sunkey' && (
        <GetMySunKey onCalculate={handleCalculate} onShowMap={handleShowMap} onHome={handleReset} />
      )}
      {currentView === 'result' && selectedGK !== null && (
        <ResultPage geneKey={selectedGK} birthData={birthData} onReset={handleReset} onShowMap={handleShowMap} onCalculate={handleCalculate} />
      )}
      {currentView === 'map' && (
        <ConsciousnessMap onBack={handleReset} onSelectGeneKey={handleSelectFromMap} onShowMap={handleShowMap} onCalculate={handleCalculate} />
      )}
    </div>
  );
}

export default App;
