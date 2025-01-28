import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBoxProps {
  code: string;
  experimentNumber: number;
}

export function CodeBox({ code, experimentNumber }: CodeBoxProps) {
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
        <span className="text-gray-200">Experiment {experimentNumber}</span>
        <button
          onClick={copyCode}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Copy size={16} />
          <span>Copy Code</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-gray-100">{code}</code>
      </pre>
    </div>
  );
}