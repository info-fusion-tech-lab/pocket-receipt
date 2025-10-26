import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import StatsCard from './components/StatsCard';
import ExpenseList from './components/ExpenseList';
import Footer from './components/Footer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { extractDataFromText, validateImageFile } from './utils/extractData';

function App() {
  const [expenses, setExpenses] = useLocalStorage('pocket-expenses', []);
  const [processing, setProcessing] = useState(false);
  const [preview, setPreview] = useState(null);
  const [extractedData, setExtractedData] = useState(null);

  // FIXED: FileReader async handling
  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // Validate file
      validateImageFile(file);

      // FIXED: Wait for preview to load first
      const dataURL = await readFileAsDataURL(file);
      setPreview(dataURL);

      setProcessing(true);
      setExtractedData(null);

      // FIXED: Check if Tesseract is loaded
      if (!window.Tesseract) {
        throw new Error('Tesseract library load nahi hua. Page refresh karo!');
      }

      // Create Tesseract worker
      const { createWorker } = window.Tesseract;
      const worker = await createWorker('eng');
      
      const { data: { text } } = await worker.recognize(file);
      await worker.terminate();

      // Extract data from text
      const extracted = extractDataFromText(text);
      setExtractedData(extracted);

    } catch (error) {
      console.error('OCR Error:', error);
      alert(error.message || 'Image read karne me error aayi. Dobara try karo!');
      setPreview(null);
    } finally {
      setProcessing(false);
    }
  };

  const saveExpense = () => {
    if (!extractedData || extractedData.amount === 0) {
      alert('Pehle amount detect hone do ya manually edit karo!');
      return;
    }

    const newExpense = {
      id: Date.now(),
      ...extractedData,
      timestamp: new Date().toISOString()
    };

    setExpenses([newExpense, ...expenses]);
    
    // Reset form
    setPreview(null);
    setExtractedData(null);
    
    // Show success message
    alert('✅ Expense save ho gayi!');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const downloadCSV = () => {
    if (expenses.length === 0) {
      alert('Koi expense nahi hai download karne ke liye!');
      return;
    }

    const csv = [
      ['Date', 'Shop', 'Amount', 'Timestamp'],
      ...expenses.map(e => [
        e.date,
        `"${e.shop.replace(/"/g, '""')}"`, // Escape quotes in CSV
        e.amount,
        e.timestamp
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pocket-receipt-expenses-${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <UploadSection
          onImageUpload={handleImageUpload}
          processing={processing}
          preview={preview}
          extractedData={extractedData}
          onSaveExpense={saveExpense}
        />

        <StatsCard expenses={expenses} />

        <ExpenseList
          expenses={expenses}
          onDelete={deleteExpense}
          onDownloadCSV={downloadCSV}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
