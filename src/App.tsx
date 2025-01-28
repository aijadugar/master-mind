import React, { useState } from 'react';
import { ExperimentButton } from './components/ExperimentButton';
import { CodeBox } from './components/CodeBox';
import { experiments } from './data/experiments';
import { Beaker } from 'lucide-react';

function App() {
  const [activeExperiment, setActiveExperiment] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Beaker className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AIJADUGAR</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Experiment Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {experiments.map((experiment) => (
            <ExperimentButton
              key={experiment.id}
              number={experiment.id}
              isActive={activeExperiment === experiment.id}
              onClick={() => setActiveExperiment(experiment.id)}
            />
          ))}
        </div>

        {/* Code Box */}
        {activeExperiment && (
          <div className="mt-8 animate-fade-in">
            <CodeBox
              experimentNumber={activeExperiment}
              code={experiments.find((e) => e.id === activeExperiment)?.code || ''}
            />
          </div>
        )}

        {/* Initial Message */}
        {!activeExperiment && (
          <div className="text-center text-gray-600 mt-12">
            <p className="text-lg">Select an experiment to view its code</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;