import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ResultPage } from './components/ResultPage';
import { ConsciousnessMap } from './components/ConsciousnessMap';
import { geneKeyOrder } from './data/geneKeyOrder';

type View = 'landing' | 'result' | 'map';

function App() {
  const [selectedGK, setSelectedGK] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<View>('landing');

  const handleCalculate = () => {
    const randomIndex = Math.floor(Math.random() * 64);
    const gk = geneKeyOrder[randomIndex];
    setSelectedGK(gk);
    setCurrentView('result');
  };

  const handleReset = () => {
    setSelectedGK(null);
    setCurrentView('landing');
  };

  const handleShowMap = () => {
    setCurrentView('map');
  };

  const handleSelectFromMap = (geneKey: number) => {
    setSelectedGK(geneKey);
    setCurrentView('result');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {currentView === 'landing' && (
        <LandingPage onCalculate={handleCalculate} onShowMap={handleShowMap} />
      )}
      {currentView === 'result' && selectedGK !== null && (
        <ResultPage geneKey={selectedGK} onReset={handleReset} />
      )}
      {currentView === 'map' && (
        <ConsciousnessMap onBack={handleReset} onSelectGeneKey={handleSelectFromMap} />
      )}
    </div>
  );
}

export default App;
