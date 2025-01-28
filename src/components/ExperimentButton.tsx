import React from 'react';

interface ExperimentButtonProps {
  number: number;
  onClick: () => void;
  isActive: boolean;
}

export function ExperimentButton({ number, onClick, isActive }: ExperimentButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg transition-all ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg scale-105'
          : 'bg-white hover:bg-blue-50 text-blue-600 shadow-md hover:scale-105'
      }`}
    >
      Experiment {number}
    </button>
  );
}