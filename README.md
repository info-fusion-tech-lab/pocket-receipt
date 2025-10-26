# 📸 Pocket Receipt - Smart Expense Tracker

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> **Apne bills ko scan karo, expenses track karo - Completely Offline! 🔥**

Pocket Receipt ek modern, offline-first expense tracking app hai jo receipt images se automatically data extract karta hai using OCR technology.

---

## ✨ Features

- 📸 **Receipt OCR** - Tesseract.js se automatic text extraction
- 💰 **Smart Detection** - Amount, date, shop name automatically detect
- 💾 **Offline Storage** - Sab data phone me save (localStorage)
- 📊 **Stats Dashboard** - Total expense, monthly trends
- 📥 **CSV Export** - Excel me open kar sakte ho
- 🎨 **Modern UI** - Dark theme with glassmorphism
- 📱 **PWA Ready** - Installable progressive web app
- 🚀 **Fast & Lightweight** - No backend required

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed hona chahiye
- npm ya yarn

### Installation

```bash
# 1. Repo clone karo
git clone https://github.com/YOUR_USERNAME/pocket-receipt.git
cd pocket-receipt

# 2. Dependencies install karo
npm install

# 3. Development server start karo
npm run dev

# 4. Browser me kholo: http://localhost:3000
```

---

## 📁 Project Structure

```
pocket-receipt/
│
├─ public/
│   ├─ index.html           # Main HTML entry
│   ├─ manifest.json        # PWA config
│   ├─ service-worker.js    # Offline support
│   └─ assets/              # Icons, images
│
├─ src/
│   ├─ components/
│   │   ├─ Header.jsx       # App header
│   │   ├─ UploadSection.jsx  # OCR upload UI
│   │   ├─ StatsCard.jsx    # Statistics display
│   │   ├─ ExpenseList.jsx  # Expense history
│   │   └─ Footer.jsx       # Footer section
│   │
│   ├─ hooks/
│   │   └─ useLocalStorage.js  # Custom storage hook
│   │
│   ├─ utils/
│   │   └─ extractData.js   # OCR text parsing
│   │
│   ├─ App.jsx             # Main component
│   └─ index.jsx           # React DOM render
│
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Tesseract.js** | OCR engine |
| **Tailwind CSS** | Styling (via CDN) |
| **LocalStorage API** | Offline data persistence |
| **Service Worker** | PWA offline support |

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Build files `dist/` folder me generate honge.

### Deploy to GitHub Pages

```bash
# 1. package.json me "homepage" add karo
"homepage": "https://YOUR_USERNAME.github.io/pocket-receipt"

# 2. Deploy command
npm run deploy
```

### Deploy to Vercel/Netlify

```bash
# Build command
npm run build

# Output directory
dist
```

---

## 🎯 Usage Guide

### 1️⃣ Upload Receipt
- "Photo Upload Karo" button click karo
- Camera ya gallery se image select karo
- Wait karo jab tak OCR processing hoti hai

### 2️⃣ Verify Data
- Extracted amount, date, shop name check karo
- Agar sahi hai toh "Save Karo" click karo

### 3️⃣ Track Expenses
- Expense history me sab entries dikhenge
- Stats cards me total aur monthly expense dekh sakte ho

### 4️⃣ Export Data
- "CSV Download" button se data export karo
- Excel me open karke analysis kar sakte ho

---

## 🐛 Bug Fixes Applied

✅ **Tesseract loading issue** - Moved script to `public/index.html`  
✅ **FileReader async** - Proper promise handling  
✅ **Amount regex** - Now handles `Rs. 1000/-` format  
✅ **Preview scroll** - Added `max-height` with overflow  
✅ **Loading indicator** - Spinner animation added  
✅ **Delete UX** - Modal confirmation instead of alert  
✅ **Custom scrollbar** - Smooth purple-themed scrollbar  
✅ **CSV escape** - Proper quote escaping in shop names  

---

## 🔮 Future Enhancements

- [ ] 🤖 AI-based category auto-tagging
- [ ] 📊 Charts & graphs (recharts integration)
- [ ] ☁️ Cloud sync (Firebase/Supabase)
- [ ] 💬 Voice input for quick expense entry
- [ ] 🏷️ Manual category editing
- [ ] 🔔 Budget limit alerts
- [ ] 📱 Native mobile app (React Native)

---

## 🤝 Contributing

Contributions welcome! Pull request bhejo ya issue create karo.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

MIT License - Free to use & modify!

---

## 🔥 Made with ❤️ by You

Agar project pasand aaya toh ⭐ star de do!

**Issues ya questions?** GitHub Issues me poocho.

---

## 📞 Support

- 📧 Email: your.email@example.com
- 💬 Twitter: @yourhandle
- 🌐 Portfolio: yourwebsite.com

---

**Happy Tracking! 💰📸**
