# 💰 Expense Tracker — Financial Intelligence Dashboard

A modern, responsive expense tracking web application built using React.js.  
Track income and expenses, visualize financial trends, and export transaction history with a clean analytics-driven interface.

---

## 🚀 Features

### 📊 Dashboard (Executive Control Panel)
- Total Balance Overview
- Total Income & Total Expenses
- Category-wise expense breakdown
- Pie Chart → Expense distribution
- Bar Chart → Monthly income vs expense comparison

### ➕ Add Transaction
- Add income or expense entries
- Category selection
- Date selection (defaults to today)
- Form validation
- Instant dashboard update

### 📜 Transaction Ledger
- Complete transaction history
- Delete transactions
- Date tracking for every entry
- Download transaction history as CSV

### 📈 Reports & Analytics
- Doughnut Chart → Expense distribution by category
- Grouped Bar Chart → Monthly Income vs Expense
- Line Chart → Income vs Expense trend
- Horizontal Bar Chart → Category-wise totals
- Dynamic Light & Dark Mode palettes

---

## 🛠 Tech Stack

- React.js
- React Router
- Context API (Global State Management)
- Recharts (Data Visualization)
- CSS Modules
- Local Storage (Data Persistence)

---

## 🎨 UI & UX Highlights

- Fully responsive layout
- Smooth mobile side-drawer navigation
- Dynamic theme switching (Light / Dark mode)
- Adaptive chart color palettes
- Clean dashboard-style analytics interface

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/LanishaThomas/expense-tracker.git
cd expense-tracker
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project locally

```bash
npm start
```

The application will run on:

```
http://localhost:3000
```

### 4️⃣ Build for production

```bash
npm run build
```

---

## 📤 CSV Export

Users can download their transaction history as a `.csv` file compatible with:

- Microsoft Excel
- Google Sheets
- Financial analysis tools

---

## 🧠 Architecture Overview

- Global transaction state handled via Context API.
- Reports page functions as a read-only analytics layer.
- Chart data computed dynamically using `useMemo`.
- Theme state centrally managed and passed to components for reactive UI updates.
- All data persisted locally using browser Local Storage.

---

## ✨ Author

- Lanisha