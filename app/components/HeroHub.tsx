'use client';

import { Calculator, BarChart3, Star, Sparkles, Info } from 'lucide-react';
import Link from 'next/link';

export default function HeroHub() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 flex items-center justify-center p-4 overflow-hidden">
      {/* Credits Button */}
      <Link href="/credits">
        <button className="fixed top-4 right-4 z-50 p-3 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-lg border-2 border-blue-900 hover:brightness-110 transition-all transform hover:scale-110 group"
          title="Créditos">
          <Info size={24} className="text-white" />
        </button>
      </Link>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Star size={80} className="absolute top-10 left-10 text-yellow-600" />
        <Sparkles size={80} className="absolute bottom-20 right-20 text-purple-600" />
        <Star size={72} className="absolute top-1/3 right-10 text-orange-600" />
        <Sparkles size={72} className="absolute bottom-1/4 left-1/4 text-red-600" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Title Box - Comic style */}
        <div className="relative mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl transform -rotate-2" 
            style={{
              clipPath: 'polygon(5% 0%, 95% 2%, 100% 5%, 100% 95%, 95% 98%, 5% 100%, 0% 95%, 0% 5%)',
              boxShadow: '0 0 0 4px #000, 0 8px 16px rgba(0,0,0,0.3), inset 0 0 0 3px rgba(255,255,255,0.2)'
            }}></div>
          
          <div className="relative px-8 py-12 text-center">
            <h1 className="text-6xl md:text-7xl font-black text-white drop-shadow-lg mb-2" style={{
              textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000, 0px 0px 25px rgba(255,215,0,0.9)',
              fontStyle: 'italic',
              letterSpacing: '2px'
            }}>
              HERO SYSTEM
            </h1>
            <h2 className="text-4xl font-black text-yellow-300 drop-shadow-lg" style={{
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
            }}>
              v6 TOOLS
            </h2>
            <p className="text-lg font-bold text-white mt-4" style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>
              Por McCocha
            </p>
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-white rounded-2xl border-4 border-black p-6 mb-12 transform -rotate-1 shadow-lg"
          style={{
            boxShadow: '0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
          }}>
          <p className="text-xl font-black text-gray-800 text-center leading-relaxed flex items-center justify-center gap-2">
            <Sparkles size={24} className="text-red-600" />
            Bienvenido a la central de herramientas para el <span className="text-red-600">HERO SYSTEM 6ª EDICIÓN</span>
            <Sparkles size={24} className="text-red-600" />
          </p>
          <p className="text-lg font-bold text-gray-700 text-center mt-4 leading-relaxed">
            Explora nuestras calculadoras y herramientas diseñadas para facilitar tus campañas de rol.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Powers Calculator Tool */}
          <Link href="/calculator">
            <div className="group cursor-pointer relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl transform rotate-1 group-hover:rotate-3 group-hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: '0 0 0 3px #000, 0 8px 16px rgba(0,0,0,0.3)'
                }}></div>
              
              <div className="relative bg-white rounded-2xl p-8 border-4 border-black transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300"
                style={{
                  boxShadow: 'inset 0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
                }}>
              <div className="text-6xl mb-4 text-center group-hover:scale-125 transition-transform duration-300">
                  <Calculator size={64} className="mx-auto text-cyan-600" />
                </div>
                <h3 className="text-3xl font-black text-gray-800 text-center mb-2" style={{
                  textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                }}>
                  PODERES
                </h3>
                <p className="text-lg font-bold text-gray-600 text-center mb-4">
                  Calcula costos de poderes y habilidades
                </p>
                <div className="flex justify-center">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-black px-6 py-2 rounded-lg border-2 border-black transform group-hover:scale-110 transition-transform">
                    INGRESAR →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Stats Calculator Tool */}
          <Link href="/stats">
            <div className="group cursor-pointer relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl transform rotate-1 group-hover:rotate-3 group-hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: '0 0 0 3px #000, 0 8px 16px rgba(0,0,0,0.3)'
                }}></div>
              
              <div className="relative bg-white rounded-2xl p-8 border-4 border-black transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300"
                style={{
                  boxShadow: 'inset 0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
                }}>
              <div className="text-6xl mb-4 text-center group-hover:scale-125 transition-transform duration-300">
                  <BarChart3 size={64} className="mx-auto text-emerald-600" />
                </div>
                <h3 className="text-3xl font-black text-gray-800 text-center mb-2" style={{
                  textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
                }}>
                  STATS
                </h3>
                <p className="text-lg font-bold text-gray-600 text-center mb-4">
                  Calcula costos de características
                </p>
                <div className="flex justify-center">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-black px-6 py-2 rounded-lg border-2 border-black transform group-hover:scale-110 transition-transform">
                    INGRESAR →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* WIP Tool - Commented out for future use
          <div className="group cursor-not-allowed relative opacity-60">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl transform rotate-1"
              style={{
                boxShadow: '0 0 0 3px #000, 0 8px 16px rgba(0,0,0,0.3)'
              }}></div>
            
            <div className="relative bg-white rounded-2xl p-8 border-4 border-black"
              style={{
                boxShadow: 'inset 0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.2)'
              }}>
              <div className="text-6xl mb-4 text-center">
                <Wrench size={64} className="mx-auto text-gray-400" />
              </div>
              <h3 className="text-3xl font-black text-gray-400 text-center mb-2" style={{
                textShadow: '2px 2px 0 rgba(0,0,0,0.1)'
              }}>
                PRÓXIMAMENTE
              </h3>
              <p className="text-lg font-bold text-gray-500 text-center mb-4">
                Más herramientas en desarrollo
              </p>
              <div className="flex justify-center">
                <span className="bg-gray-400 text-gray-600 font-black px-6 py-2 rounded-lg border-2 border-black cursor-not-allowed">
                  WIP
                </span>
              </div>
            </div>
          </div>
          */}
        </div>

        {/* Floating stars animation */}
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="inline-block animate-bounce">
            <Star size={40} className="text-yellow-500" />
          </div>
          <div className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Sparkles size={40} className="text-yellow-500" />
          </div>
          <div className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>
            <Star size={40} className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
