'use client';

import { Calculator, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HubProps {
  onSelectApp: (app: 'calculator' | 'wip') => void;
  currentApp: 'calculator' | 'wip';
}

export default function Hub({ onSelectApp, currentApp }: HubProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg border-2 border-purple-900 hover:brightness-110 transition-all"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>

      {/* Hub Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Hub Panel */}
      <div className={`fixed left-0 top-0 h-screen w-24 bg-gradient-to-b from-purple-600 via-purple-700 to-indigo-800 flex flex-col items-center justify-center gap-8 shadow-2xl border-r-4 border-purple-900 z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      {/* Calculate Button */}
      <button
        onClick={() => {
          onSelectApp('calculator');
          setIsOpen(false);
        }}
        className={`relative group transition-all duration-300 ${
          currentApp === 'calculator'
            ? 'scale-125 brightness-150'
            : 'hover:scale-110 hover:brightness-110'
        }`}
        title="Calculadora"
      >
        <div className={`p-4 rounded-xl transition-all ${
          currentApp === 'calculator'
            ? 'bg-yellow-300 shadow-lg shadow-yellow-400'
            : 'bg-white hover:bg-yellow-100'
        }`}>
          <Calculator
            size={32}
            className={currentApp === 'calculator' ? 'text-purple-700' : 'text-purple-700'}
            strokeWidth={2.5}
          />
        </div>
        <div className="absolute left-24 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-bold">
          Calculadora
        </div>
      </button>

      {/* WIP Icon */}
      <button
        onClick={() => {
          onSelectApp('wip');
          setIsOpen(false);
        }}
        disabled
        className={`relative group transition-all duration-300 cursor-not-allowed opacity-60 ${
          currentApp === 'wip'
            ? 'scale-125'
            : 'hover:scale-110'
        }`}
        title="Work in Progress"
      >
        <div className="p-4 rounded-xl bg-gray-400">
          <Zap size={32} className="text-gray-600" strokeWidth={2.5} />
        </div>
        <div className="absolute left-24 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-bold">
          WIP
        </div>
      </button>
    </div>
    </>
  );
}
