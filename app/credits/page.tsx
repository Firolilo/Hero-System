'use client';

import { Calculator, Wrench, Star, Sparkles, Info, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Credits() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4 overflow-hidden">
      {/* Back Button */}
      <Link href="/">
        <button className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg border-2 border-purple-900 hover:brightness-110 transition-all transform hover:scale-110 group">
          <ArrowLeft size={24} className="text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>

      {/* Main Container */}
      <div className="relative z-10 max-w-3xl w-full">
        {/* Title Box */}
        <div className="relative mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-3xl transform -rotate-2"
            style={{
              clipPath: 'polygon(5% 0%, 95% 2%, 100% 5%, 100% 95%, 95% 98%, 5% 100%, 0% 95%, 0% 5%)',
              boxShadow: '0 0 0 4px #000, 0 8px 16px rgba(0,0,0,0.3), inset 0 0 0 3px rgba(255,255,255,0.2)'
            }}></div>

          <div className="relative px-8 py-12 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg flex items-center justify-center gap-3" style={{
              textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000, 0px 0px 25px rgba(255,215,0,0.9)',
              fontStyle: 'italic',
              letterSpacing: '2px'
            }}>
              <Info size={48} />
              CRÉDITOS
            </h1>
          </div>
        </div>

        {/* Credits Content */}
        <div className="space-y-6">
          {/* Hero System Creator */}
          <div className="bg-white rounded-2xl border-4 border-black p-8 transform -rotate-1 shadow-lg"
            style={{
              boxShadow: '0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
            }}>
            <h2 className="text-3xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <Star size={32} className="text-yellow-500" />
              HERO SYSTEM v6
            </h2>
            <p className="text-lg font-bold text-gray-700 leading-relaxed mb-3">
              Sistema de juego de rol creado por Steven S. Long
            </p>
            <p className="text-base font-semibold text-gray-600 leading-relaxed">
              Publicado por Hero Games (Steve Kenson) y anteriormente por George MacDonald y DOJ (Department of Justice).
            </p>
          </div>

          {/* Hero System History */}
          <div className="bg-white rounded-2xl border-4 border-black p-8 transform rotate-1 shadow-lg"
            style={{
              boxShadow: '0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
            }}>
            <h2 className="text-3xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <Sparkles size={32} className="text-blue-500" />
              SOBRE HERO SYSTEM
            </h2>
            <p className="text-base font-semibold text-gray-700 leading-relaxed mb-3">
              HERO System (High-End Role-Playing Operating System) es un sistema de juego de rol universal y flexible diseñado para permitir a los jugadores y directores de juego crear cualquier tipo de campaña que se les ocurra.
            </p>
            <p className="text-base font-semibold text-gray-600 leading-relaxed">
              Ha sido utilizado para innumerables mundos y géneros, desde superhéroes y fantasía hasta ciencia ficción y horror. La 6ª edición representa la culminación de décadas de desarrollo y refinamiento del sistema.
            </p>
          </div>

          {/* Tool Creator */}
          <div className="bg-white rounded-2xl border-4 border-black p-8 transform -rotate-1 shadow-lg"
            style={{
              boxShadow: '0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
            }}>
            <h2 className="text-3xl font-black text-gray-800 mb-4 flex items-center gap-3">
              <Calculator size={32} className="text-purple-500" />
              HERO SYSTEM v6 TOOLS
            </h2>
            <p className="text-lg font-bold text-gray-700 leading-relaxed mb-3">
              Herramientas creadas por: McCocha
            </p>
            <p className="text-base font-semibold text-gray-600 leading-relaxed">
              Conjunto de calculadoras y herramientas diseñadas para facilitar el cálculo de puntos y características en el sistema HERO SYSTEM 6ª edición.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 rounded-2xl border-4 border-black p-6 transform rotate-1"
            style={{
              boxShadow: '0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
            }}>
            <p className="text-sm font-bold text-gray-700 leading-relaxed">
              <span className="font-black text-red-600">NOTA LEGAL:</span> HERO System es una marca registrada de Hero Games. Estas herramientas se proporcionan como referencia educativa y para facilitar el juego. No representan una recomendación oficial de Hero Games.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex justify-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black py-4 px-8 rounded-2xl border-4 border-black transition-all transform hover:scale-105 active:scale-95 text-lg"
              style={{
                boxShadow: '6px 6px 0px rgba(0,0,0,0.3)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
              VOLVER AL HUB
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
