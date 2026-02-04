'use client';

import { useState } from 'react';
import Tooltip from './Tooltip';
import Link from 'next/link';
import { Home } from 'lucide-react';

interface CharacteristicDef {
  name: string;
  abbr: string;
  base: number;
  costPer: number;
  increment: number;
  description: string;
}

const characteristics: CharacteristicDef[] = [
  { name: 'Fuerza', abbr: 'STR', base: 10, costPer: 1, increment: 1, description: 'Fuerza física del personaje' },
  { name: 'Destreza', abbr: 'DEX', base: 10, costPer: 2, increment: 1, description: 'Agilidad y precisión' },
  { name: 'Constitución', abbr: 'CON', base: 10, costPer: 1, increment: 1, description: 'Resistencia y salud' },
  { name: 'Inteligencia', abbr: 'INT', base: 10, costPer: 1, increment: 1, description: 'Capacidad mental y razonamiento' },
  { name: 'Ego', abbr: 'EGO', base: 10, costPer: 1, increment: 1, description: 'Fuerza de voluntad' },
  { name: 'Presencia', abbr: 'PRE', base: 10, costPer: 1, increment: 1, description: 'Carisma y presencia' },
  { name: 'Valor Ofensivo de Combate', abbr: 'OCV', base: 3, costPer: 5, increment: 1, description: 'Habilidad para atacar' },
  { name: 'Valor Defensivo de Combate', abbr: 'DCV', base: 3, costPer: 5, increment: 1, description: 'Habilidad para defenderse' },
  { name: 'Valor Ofensivo Mental', abbr: 'OMCV', base: 3, costPer: 5, increment: 1, description: 'Ataque mental' },
  { name: 'Valor Defensivo Mental', abbr: 'DMCV', base: 3, costPer: 5, increment: 1, description: 'Defensa mental' },
  { name: 'Velocidad', abbr: 'SPD', base: 2, costPer: 10, increment: 1, description: 'Turnos de acción por fase' },
  { name: 'Defensa Física', abbr: 'PD', base: 2, costPer: 1, increment: 1, description: 'Resistencia a daño físico' },
  { name: 'Defensa de Energía', abbr: 'ED', base: 2, costPer: 1, increment: 1, description: 'Resistencia a energía' },
  { name: 'Recuperación', abbr: 'REC', base: 4, costPer: 1, increment: 1, description: 'Recuperación de STUN' },
  { name: 'Aguante', abbr: 'END', base: 20, costPer: 1, increment: 5, description: 'Energía para usar poderes' },
  { name: 'Cuerpo', abbr: 'BODY', base: 10, costPer: 1, increment: 1, description: 'Puntos de vida' },
  { name: 'Aturdimiento', abbr: 'STUN', base: 20, costPer: 1, increment: 2, description: 'Capacidad de permanecer consciente' },
];

export default function StatsCalculator() {
  const [values, setValues] = useState<Record<string, number>>(
    characteristics.reduce((acc, char) => ({ ...acc, [char.abbr]: char.base }), {})
  );

  const calculateCharCost = (char: CharacteristicDef, value: number): number => {
    const difference = value - char.base;
    const points = difference / char.increment;
    return points * char.costPer;
  };

  const calculateTotalCost = (): number => {
    return characteristics.reduce((total, char) => {
      return total + calculateCharCost(char, values[char.abbr]);
    }, 0);
  };

  const handleValueChange = (abbr: string, newValue: string) => {
    const numValue = parseFloat(newValue);
    if (!isNaN(numValue)) {
      setValues(prev => ({ ...prev, [abbr]: numValue }));
    }
  };

  const resetToBase = () => {
    setValues(characteristics.reduce((acc, char) => ({ ...acc, [char.abbr]: char.base }), {}));
  };

  const totalCost = calculateTotalCost();

  return (
    <div className="min-h-screen w-full p-4 md:p-8" style={{
      background: 'radial-gradient(circle at top left, #fff7ed 0%, #e0f2fe 35%, #bfdbfe 70%, #93c5fd 100%)',
      position: 'relative'
    }}>
      {/* Halftone dots patternee */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
        backgroundSize: '18px 18px'
      }}></div>
      {/* Comic burst cornerssad */}
      <div className="absolute top-6 right-6 w-24 h-24 bg-yellow-300 border-4 border-black rounded-full rotate-12 shadow-[6px_6px_0_#000] opacity-80"></div>
      <div className="absolute bottom-8 left-8 w-28 h-28 bg-pink-300 border-4 border-black rounded-full -rotate-6 shadow-[6px_6px_0_#000] opacity-70"></div>

      {/* Home Buttonee */}
      <Link href="/">
        <button className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg border-2 border-purple-900 hover:brightness-110 transition-all transform hover:scale-110 group"
          title="Volver al Hub">
          <Home size={24} className="text-white" />
        </button>
      </Link>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titlew */}
        <div className="relative mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 rounded-3xl transform -rotate-1" 
            style={{
              clipPath: 'polygon(5% 0%, 95% 2%, 100% 5%, 100% 95%, 95% 98%, 5% 100%, 0% 95%, 0% 5%)',
              boxShadow: '0 0 0 5px #000, 0 10px 18px rgba(0,0,0,0.35), inset 0 0 0 3px rgba(255,255,255,0.25)'
            }}></div>
          
          <div className="relative px-8 py-8 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg" style={{
              textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000, 0px 0px 24px rgba(0,180,255,0.9)',
              fontStyle: 'italic',
              letterSpacing: '2px'
            }}>
              CALCULADORA DE CARACTERÍSTICAS
            </h1>
          </div>
        </div>

        {/* Total Cost Display - Sticky */}
        <div className="sticky top-4 z-40 mb-8">
          <div className="bg-gradient-to-br from-yellow-300 to-orange-500 rounded-2xl p-6 border-4 border-black transform -rotate-1"
            style={{
              boxShadow: '0 0 0 3px #000, 0 10px 0 #000, 0 12px 20px rgba(0,0,0,0.35)'
            }}>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white" style={{
                  textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
                }}>
                  COSTO TOTAL:
                </h2>
              </div>
              <div className="bg-white rounded-xl px-6 py-3 border-2 border-black shadow-[3px_3px_0_#000]">
                <p className="text-4xl md:text-5xl font-black" style={{
                  color: totalCost >= 0 ? '#16a34a' : '#dc2626'
                }}>
                  {totalCost >= 0 ? '+' : ''}{totalCost} <span className="text-2xl">CP</span>
                </p>
              </div>
              <button
                onClick={resetToBase}
                className="px-6 py-3 bg-gradient-to-br from-gray-700 to-gray-900 text-white font-black rounded-lg border-2 border-black hover:brightness-110 transform hover:scale-105 transition-all shadow-[3px_3px_0_#000]"
                style={{
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}>
                RESETEAR
              </button>
            </div>
          </div>
        </div>

        {/* Characteristics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {characteristics.map((char) => {
            const cost = calculateCharCost(char, values[char.abbr]);
            const isModified = values[char.abbr] !== char.base;
            
            return (
              <div key={char.abbr} className={`bg-white rounded-2xl border-4 border-black p-3 transform transition-all ${isModified ? 'scale-105 -rotate-1' : 'hover:scale-105'}`}
                style={{
                  boxShadow: '0 8px 0 #000, 0 12px 16px rgba(0,0,0,0.25)'
                }}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-blue-600">{char.abbr}</span>
                    <Tooltip content={char.description} />
                  </div>
                  <span className={`text-xs font-black px-2 py-0.5 rounded-md border-2 border-black ${
                    cost > 0 ? 'bg-red-200 text-red-700' : 
                    cost < 0 ? 'bg-green-200 text-green-700' : 
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {cost > 0 ? '+' : ''}{cost} CP
                  </span>
                </div>
                
                <p className="text-xs font-bold text-gray-700 mb-2 min-h-[16px]">{char.name}</p>
                
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2">
                  <button
                    onClick={() => handleValueChange(char.abbr, (values[char.abbr] - char.increment).toString())}
                    className="w-8 h-8 flex items-center justify-center bg-red-500 text-white font-black text-lg rounded-md border-2 border-black hover:brightness-110 hover:scale-110 transition-all active:scale-95"
                    style={{
                      boxShadow: '2px 2px 0 #000'
                    }}
                  >
                    −
                  </button>
                  
                  <input
                    type="number"
                    value={values[char.abbr]}
                    onChange={(e) => handleValueChange(char.abbr, e.target.value)}
                    step={char.increment}
                    className="w-full text-center text-lg font-black border-2 border-black rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                  
                  <button
                    onClick={() => handleValueChange(char.abbr, (values[char.abbr] + char.increment).toString())}
                    className="w-8 h-8 flex items-center justify-center bg-green-500 text-white font-black text-lg rounded-md border-2 border-black hover:brightness-110 hover:scale-110 transition-all active:scale-95"
                    style={{
                      boxShadow: '2px 2px 0 #000'
                    }}
                  >
                    +
                  </button>
                </div>
                
                <p className="text-[11px] text-gray-500 mt-2 text-center font-bold">
                  Base: {char.base} | Costo: {char.costPer}CP{char.increment > 1 ? `/${char.increment}` : ''}
                </p>
              </div>
            );
          })}
        </div>

        {/* Info Card */}
        <div className="bg-yellow-100 rounded-2xl border-4 border-black p-6 transform rotate-1"
          style={{
            boxShadow: '0 0 0 2px #000, 0 8px 0 #000, 0 12px 16px rgba(0,0,0,0.2)'
          }}>
          <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">ℹ️</span> INFORMACIÓN
          </h3>
          <div className="space-y-2 text-base font-bold text-gray-700">
            <p>• Los valores <strong className="text-green-600">por encima</strong> de la base <strong className="text-red-600">cuestan CP</strong></p>
            <p>• Los valores <strong className="text-red-600">por debajo</strong> de la base <strong className="text-green-600">devuelven CP</strong></p>
            <p>• Cada característica tiene un coste diferente por punto</p>
            <p>• END se compra en incrementos de 5, STUN en incrementos de 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
