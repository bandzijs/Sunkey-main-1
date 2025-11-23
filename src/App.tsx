import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ResultPage } from './components/ResultPage';
import { geneKeyOrder } from './data/geneKeyOrder';

function App() {
  const [selectedGK, setSelectedGK] = useState<number | null>(null);

  const handleCalculate = () => {
    const randomIndex = Math.floor(Math.random() * 64);
    const gk = geneKeyOrder[randomIndex];
    setSelectedGK(gk);
  };

  const handleReset = () => {
    setSelectedGK(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {selectedGK === null ? (
        <LandingPage onCalculate={handleCalculate} />
      ) : (
        <ResultPage geneKey={selectedGK} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
