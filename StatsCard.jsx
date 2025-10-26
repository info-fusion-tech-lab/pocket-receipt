import React from 'react';
import { formatCurrency } from '../utils/extractData';

const StatsCard = ({ expenses }) => {
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const totalCount = expenses.length;

  // Calculate this month's expense
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  const thisMonthExpense = expenses
    .filter(e => {
      const expenseDate = new Date(e.timestamp);
      return expenseDate.getMonth() === currentMonth && 
             expenseDate.getFullYear() === currentYear;
    })
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Total Expense */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition">
        <div className="flex items-center gap-2 text-purple-300 mb-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">Total Expense</span>
        </div>
        <p className="text-2xl font-bold text-yellow-400">
          {formatCurrency(totalExpense)}
        </p>
      </div>

      {/* Total Bills */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition">
        <div className="flex items-center gap-2 text-purple-300 mb-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-sm">Total Bills</span>
        </div>
        <p className="text-2xl font-bold text-green-400">{totalCount}</p>
      </div>

      {/* This Month */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition">
        <div className="flex items-center gap-2 text-purple-300 mb-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">This Month</span>
        </div>
        <p className="text-2xl font-bold text-blue-400">
          {formatCurrency(thisMonthExpense)}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
