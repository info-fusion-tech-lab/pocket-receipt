import React from 'react';

const Footer = () => {
  return (
    <div className="mt-8 text-center text-purple-300 text-sm pb-8">
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 max-w-2xl mx-auto">
        <p className="mb-2">💡 <strong>Pro Tip:</strong> Saare bills offline save hote hain!</p>
        <p className="text-xs opacity-75 mb-3">Internet nahi chahiye, sab phone me safe hai 🔒</p>
        <div className="flex items-center justify-center gap-2 text-purple-200">
          <span>Made with</span>
          <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span>by you 🔥</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
