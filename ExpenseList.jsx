import React, { useState } from 'react';
import { formatCurrency } from '../utils/extractData';

const ExpenseList = ({ expenses, onDelete, onDownloadCSV }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = (id) => {
    onDelete(id);
    setDeleteConfirm(null);
  };

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Expense History
        </h2>
        {expenses.length > 0 && (
          <button
            onClick={onDownloadCSV}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            CSV Download
          </button>
        )}
      </div>

      {expenses.length === 0 ? (
        <div className="text-center py-12 text-purple-300">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>Abhi tak koi expense nahi hai.</p>
          <p className="text-sm mt-2">Pehla bill scan karo! 📸</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {expenses.map(expense => (
            <div
              key={expense.id}
              className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition relative"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-lg truncate">{expense.shop}</p>
                  <p className="text-purple-300 text-sm mt-1">{expense.date}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <p className="text-2xl font-bold text-yellow-400">
                    {formatCurrency(expense.amount)}
                  </p>
                  
                  {/* FIXED: Modal-style delete confirmation instead of alert */}
                  {deleteConfirm === expense.id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => confirmDelete(expense.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
                        title="Confirm Delete"
                      >
                        ✓
                      </button>
                      <button
                        onClick={cancelDelete}
                        className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition"
                        title="Cancel"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDeleteClick(expense.id)}
                      className="text-red-400 hover:text-red-300 transition"
                      title="Delete"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(124, 58, 237, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(124, 58, 237, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ExpenseList;
