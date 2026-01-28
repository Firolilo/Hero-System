'use client';

import { useState } from 'react';

interface HeroCalculatorProps {
  isActive?: boolean;
}

export default function HeroCalculator({ isActive = true }: HeroCalculatorProps) {
  const [baseCost, setBaseCost] = useState('');
  const [ventajas, setVentajas] = useState('');
  const [limitaciones, setLimitaciones] = useState('');
  const [results, setResults] = useState<{ activePoints: number; realPoints: number } | null>(null);
  const [error, setError] = useState('');

  const calcular = () => {
    try {
      const base = parseFloat(baseCost);
      const vent = parseFloat(ventajas);
      const lim = parseFloat(limitaciones);

      if (isNaN(base) || isNaN(vent) || isNaN(lim)) {
        setError('Error: revisa los valores.');
        setResults(null);
        return;
      }

      const activePoints = base * (1 + vent);
      const realPoints = activePoints / (1 + lim);

      setResults({ activePoints, realPoints });
      setError('');
    } catch {
      setError('Error: revisa los valores.');
      setResults(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calcular();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 flex items-center justify-center p-4 md:p-8">
      <div className="relative">
        {/* Comic Book Style Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg border-8 border-black transform hover:scale-105 transition-transform duration-300"
          style={{
            filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.3))',
            boxShadow: '0 0 0 4px #FFD700, 0 0 0 8px #000'
          }}>
          
          {/* Comic style title with star burst background */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl transform -rotate-1" style={{ clipPath: 'polygon(10% 0%, 90% 5%, 100% 10%, 95% 90%, 90% 95%, 10% 100%, 5% 90%, 0% 10%)' }}></div>
            <h1 className="relative text-4xl font-black text-center text-white drop-shadow-lg" style={{
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0px 0px 20px rgba(255,215,0,0.8)',
              fontStyle: 'italic'
            }}>
              HERO CALC
            </h1>
          </div>

          <div className="space-y-6">
            {/* Base Cost Input - Comic style */}
            <div className="relative">
              <label htmlFor="baseCost" className="block text-lg font-black text-gray-800 mb-2 uppercase tracking-wider" style={{
                textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
              }}>
                Base Cost:
              </label>
              <input
                id="baseCost"
                type="number"
                placeholder="Ej: 100"
                step="0.01"
                value={baseCost}
                onChange={(e) => setBaseCost(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-4 border-black rounded-xl focus:outline-none transition-all font-bold text-lg bg-yellow-50 focus:bg-yellow-100"
                style={{
                  boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                }}
              />
            </div>

            {/* Ventajas Input */}
            <div className="relative">
              <label htmlFor="ventajas" className="block text-lg font-black text-gray-800 mb-2 uppercase tracking-wider" style={{
                textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
              }}>
                Ventajas:
              </label>
              <input
                id="ventajas"
                type="number"
                placeholder="Ej: 0.5"
                step="0.01"
                value={ventajas}
                onChange={(e) => setVentajas(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-4 border-black rounded-xl focus:outline-none transition-all font-bold text-lg bg-yellow-50 focus:bg-yellow-100"
                style={{
                  boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                }}
              />
              <p className="text-xs font-bold text-gray-700 mt-1">(ej: +0.5 sería 0.5)</p>
            </div>

            {/* Limitaciones Input */}
            <div className="relative">
              <label htmlFor="limitaciones" className="block text-lg font-black text-gray-800 mb-2 uppercase tracking-wider" style={{
                textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
              }}>
                Limitaciones:
              </label>
              <input
                id="limitaciones"
                type="number"
                placeholder="Ej: 1"
                step="0.01"
                value={limitaciones}
                onChange={(e) => setLimitaciones(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-4 border-black rounded-xl focus:outline-none transition-all font-bold text-lg bg-yellow-50 focus:bg-yellow-100"
                style={{
                  boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                }}
              />
              <p className="text-xs font-bold text-gray-700 mt-1">(ej: -1 sería 1)</p>
            </div>

            {/* POW! Button */}
            <button
              onClick={calcular}
              className="w-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white font-black py-4 px-6 rounded-2xl border-4 border-black transition-all transform hover:scale-105 active:scale-95 text-xl uppercase tracking-widest"
              style={{
                boxShadow: '6px 6px 0px rgba(0,0,0,0.3)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              CALCULAR
            </button>
          </div>

          {/* Results Box */}
          {results && !error && (
            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl border-4 border-black transform -rotate-1"
              style={{
                boxShadow: '6px 6px 0px rgba(0,0,0,0.2)'
              }}>
              <h2 className="text-xl font-black text-gray-800 uppercase tracking-wider mb-4" style={{
                textShadow: '2px 2px 0 rgba(255,215,0,0.5)'
              }}>
                RESULTADO
              </h2>
              <div className="space-y-4 bg-white rounded-lg p-4 border-3 border-black">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-gray-800">Active Points:</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                  }}>
                    {results.activePoints.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-gray-800">Real Points:</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                  }}>
                    {results.realPoints.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Error Box */}
          {error && (
            <div className="mt-8 p-6 bg-gradient-to-br from-red-300 to-orange-300 rounded-2xl border-4 border-black transform rotate-1"
              style={{
                boxShadow: '6px 6px 0px rgba(0,0,0,0.2)'
              }}>
              <h2 className="text-xl font-black text-red-800 uppercase tracking-wider" style={{
                textShadow: '2px 2px 0 rgba(255,255,255,0.5)'
              }}>
                ERROR: {error}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
