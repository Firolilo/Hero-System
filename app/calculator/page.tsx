'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import HeroCalculator from '../components/HeroCalculator';

export default function CalculatorPage() {
  return (
    <div className="relative">
      {/* Back Button */}
      <Link href="/">
        <button className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg border-2 border-purple-900 hover:brightness-110 transition-all transform hover:scale-110 group">
          <ArrowLeft size={24} className="text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
      <HeroCalculator isActive={true} />
    </div>
  );
}
