'use client';

import { useState } from 'react';
import Tooltip from './Tooltip';

export default function HeroCalculator() {
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
    <div className="min-h-screen w-full p-4 md:p-8" style={{
      background: 'linear-gradient(135deg, #FFFACD 0%, #FFE4B5 50%, #FFD700 100%)',
      position: 'relative'
    }}>
      {/* Decorative dots pattern - Comic book style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title Panel - Large historieta style */}
        <div className="mb-8 transform -rotate-1">
          <div className="bg-white border-8 border-black p-8 md:p-10 shadow-xl" style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 0 0 4px #FFD700'
          }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-2" style={{
              textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000, 0 0 20px rgba(255,165,0,0.8)',
              color: '#FF6B35',
              letterSpacing: '4px',
              fontStyle: 'italic'
            }}>
              ¡CALCULADORA!
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-center" style={{
              textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
              color: '#0047AB',
              letterSpacing: '2px'
            }}>
              ACTIVE POINTS
            </h2>
          </div>
        </div>

        {/* Input Panels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Panel 1: Base Cost */}
          <div className="transform rotate-1 hover:rotate-0 transition-transform">
            <div className="bg-yellow-100 border-8 border-black p-6 shadow-lg" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,0.4)'
            }}>
              <div className="flex items-center gap-2 mb-4">
                <label className="text-2xl font-black uppercase" style={{
                  color: '#FF6B35',
                  textShadow: '2px 2px 0 rgba(0,0,0,0.2)'
                }}>
                  Base Cost
                </label>
                <Tooltip
                  title="Costo Base (Base Cost)"
                  description="Es el costo inicial del poder sin modificadores. Representa el valor fundamental del efecto del poder en puntos de carácter."
                />
              </div>
              <input
                type="number"
                placeholder="100"
                step="0.01"
                value={baseCost}
                onChange={(e) => setBaseCost(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-4 border-black text-xl font-bold focus:outline-none focus:ring-4 focus:ring-orange-500 bg-white"
              />
              <p className="text-sm font-bold mt-3 text-gray-700">El costo inicial sin modificadores</p>
            </div>
          </div>

          {/* Panel 2: Ventajas */}
          <div className="transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="bg-blue-100 border-8 border-black p-6 shadow-lg" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,0.4)'
            }}>
              <div className="flex items-center gap-2 mb-4">
                <label className="text-2xl font-black uppercase" style={{
                  color: '#0047AB',
                  textShadow: '2px 2px 0 rgba(0,0,0,0.2)'
                }}>
                  Ventajas
                </label>
                <Tooltip
                  title="Ventajas (Advantages)"
                  description="Son modificadores que hacen el poder más útil o poderoso. Aumentan el costo del poder. Por ejemplo: +0.5 significa un 50% de aumento. La fórmula es: Costo Activo = Costo Base × (1 + Ventajas)"
                />
              </div>
              <input
                type="number"
                placeholder="0.5"
                step="0.01"
                value={ventajas}
                onChange={(e) => setVentajas(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-4 border-black text-xl font-bold focus:outline-none focus:ring-4 focus:ring-blue-500 bg-white"
              />
              <p className="text-sm font-bold mt-3 text-gray-700">Modificadores que aumentan costo</p>
            </div>
          </div>

          {/* Panel 3: Limitaciones */}
          <div className="transform rotate-1 hover:rotate-0 transition-transform">
            <div className="bg-red-100 border-8 border-black p-6 shadow-lg" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,0.4)'
            }}>
              <div className="flex items-center gap-2 mb-4">
                <label className="text-2xl font-black uppercase" style={{
                  color: '#DC143C',
                  textShadow: '2px 2px 0 rgba(0,0,0,0.2)'
                }}>
                  Limitaciones
                </label>
                <Tooltip
                  title="Limitaciones (Limitations)"
                  description="Son desventajas o restricciones del poder que lo hacen menos versátil. Disminuyen el costo final. Por ejemplo: 1 significa un 50% de descuento. La fórmula es: Costo Real = Costo Activo / (1 + Limitaciones)"
                />
              </div>
              <input
                type="number"
                placeholder="1"
                step="0.01"
                value={limitaciones}
                onChange={(e) => setLimitaciones(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-4 border-black text-xl font-bold focus:outline-none focus:ring-4 focus:ring-red-500 bg-white"
              />
              <p className="text-sm font-bold mt-3 text-gray-700">Restricciones que disminuyen costo</p>
            </div>
          </div>
        </div>

        {/* Calculate Button - Large */}
        <div className="mb-8 text-center">
          <button
            onClick={calcular}
            className="relative inline-block transform hover:scale-110 active:scale-95 transition-transform"
            style={{
              filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.4))'
            }}
          >
            <div className="bg-gradient-to-b from-purple-500 to-pink-600 border-8 border-black px-12 py-6 text-5xl font-black text-white uppercase cursor-pointer"
              style={{
                textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
                letterSpacing: '2px'
              }}>
              ¡CALCULAR!
            </div>
          </button>
        </div>

        {/* Results Panel */}
        {results && !error && (
          <div className="transform -rotate-1 mb-8">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 border-8 border-black p-8 shadow-xl" style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 0 0 4px #00CED1'
            }}>
              <h2 className="text-4xl font-black mb-6 uppercase" style={{
                textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
                color: '#0047AB',
                letterSpacing: '2px'
              }}>
                ¡RESULTADO!
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Active Points Result Panel */}
                <div className="bg-white border-6 border-black p-6 transform rotate-2" style={{
                  boxShadow: '6px 6px 0px rgba(0,0,0,0.2)'
                }}>
                  <p className="text-2xl font-black mb-3 uppercase" style={{
                    color: '#FF6B35',
                    textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                  }}>
                    Active Points
                  </p>
                  <p className="text-6xl font-black text-center" style={{
                    color: '#FF6B35',
                    textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
                  }}>
                    {results.activePoints.toFixed(2)}
                  </p>
                </div>

                {/* Real Points Result Panel */}
                <div className="bg-white border-6 border-black p-6 transform -rotate-1" style={{
                  boxShadow: '6px 6px 0px rgba(0,0,0,0.2)'
                }}>
                  <p className="text-2xl font-black mb-3 uppercase" style={{
                    color: '#0047AB',
                    textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                  }}>
                    Real Points
                  </p>
                  <p className="text-6xl font-black text-center" style={{
                    color: '#0047AB',
                    textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
                  }}>
                    {results.realPoints.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Panel */}
        {error && (
          <div className="transform rotate-3 mb-8">
            <div className="bg-red-200 border-8 border-black p-8 shadow-xl" style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 0 0 4px #FFB6C1'
            }}>
              <p className="text-4xl font-black text-center uppercase" style={{
                color: '#8B0000',
                textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
                letterSpacing: '2px'
              }}>
                ¡{error}!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
