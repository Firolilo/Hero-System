'use client';

import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface TooltipProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Tooltip({ title, description, children }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      {children}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="ml-2 p-1 text-blue-600 hover:text-blue-800 transition-colors"
        type="button"
      >
        <HelpCircle size={18} />
      </button>

      {isOpen && (
        <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-900 text-white rounded-lg p-3 border-2 border-blue-600 shadow-lg z-50 text-sm"
          style={{
            boxShadow: '0 0 0 2px #000, 0 6px 12px rgba(0,0,0,0.3)'
          }}>
          <h4 className="font-black mb-1 text-blue-300">{title}</h4>
          <p className="text-gray-200 leading-relaxed">{description}</p>
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}
