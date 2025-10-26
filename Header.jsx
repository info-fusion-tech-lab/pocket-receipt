import React from 'react';

const Header = () => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          {/* Receipt Icon SVG */}
          <svg 
            className="w-8 h-8 text-yellow-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          <div>
            <h1 className="text-3xl font-bold">Pocket Receipt</h1>
            <p className="text-purple-200 text-sm mt-1">
              📸 Apne bills ko scan karo, expenses track karo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
