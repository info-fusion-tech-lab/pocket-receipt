import React, { useRef } from 'react';

const UploadSection = ({ 
  onImageUpload, 
  processing, 
  preview, 
  extractedData,
  onSaveExpense 
}) => {
  const fileInputRef = useRef(null);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        {/* Camera Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Receipt Upload Karo
      </h2>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        className="hidden"
        capture="environment"
      />

      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={processing}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {/* Upload Icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        {processing ? (
          <span className="flex items-center gap-2">
            {/* FIXED: Loading Spinner */}
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Image pad raha hoon...
          </span>
        ) : 'Photo Upload Karo 📸'}
      </button>

      {/* FIXED: Preview with max-height and scroll */}
      {preview && (
        <div className="mt-4 max-h-[400px] overflow-auto rounded-xl border-2 border-yellow-400">
          <img 
            src={preview} 
            alt="Receipt Preview" 
            className="w-full rounded-xl"
          />
        </div>
      )}

      {/* Extracted Data Card */}
      {extractedData && extractedData.amount > 0 && (
        <div className="mt-4 bg-green-500/20 border border-green-400 rounded-xl p-4 animate-slideIn">
          <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Data Mil Gaya!
          </h3>
          <div className="space-y-2 text-sm">
            <p><strong>Shop:</strong> {extractedData.shop}</p>
            <p><strong>Amount:</strong> ₹{extractedData.amount.toFixed(2)}</p>
            <p><strong>Date:</strong> {extractedData.date}</p>
          </div>
          <button
            onClick={onSaveExpense}
            className="w-full mt-4 bg-green-500 text-black font-bold py-2 rounded-lg hover:bg-green-400 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            💾 Save Karo
          </button>
        </div>
      )}

      {/* FIXED: Error state when amount is 0 */}
      {extractedData && extractedData.amount === 0 && (
        <div className="mt-4 bg-red-500/20 border border-red-400 rounded-xl p-4">
          <p className="text-red-300 text-sm">
            ⚠️ Amount detect nahi hua. Receipt clear hai? Dobara try karo!
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadSection;
