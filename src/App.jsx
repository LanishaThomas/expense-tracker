import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`app-container ${
        darkMode ? "dark-bg" : "light-bg"
      }`}
    >
      <Router>
        {/* Navbar */}
        <nav className="navbar">

          <h1 className="logo">Expense Tracker</h1>

          {/* Desktop Links */}
          <div className="nav-links">
            <NavLink to="/" end className="nav-btn">
              Dashboard
            </NavLink>

            <NavLink to="/add" className="nav-btn">
              Add Transaction
            </NavLink>

            <NavLink to="/transactions" className="nav-btn">
              Transactions
            </NavLink>

            <NavLink to="/reports" className="nav-btn">
              Reports
            </NavLink>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="theme-toggle"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>
        </nav>

        {/* Mobile Menu */}
        {/* Overlay */}
{menuOpen && <div className="overlay" onClick={closeMenu}></div>}

{/* Side Drawer */}
<div className={`side-drawer ${menuOpen ? "open" : ""}`}>
  <NavLink to="/" end className="mobile-link" onClick={closeMenu}>
    Dashboard
  </NavLink>

  <NavLink to="/add" className="mobile-link" onClick={closeMenu}>
    Add Transaction
  </NavLink>

  <NavLink
    to="/transactions"
    className="mobile-link"
    onClick={closeMenu}
  >
    Transactions
  </NavLink>

  <NavLink
    to="/reports"
    className="mobile-link"
    onClick={closeMenu}
  >
    Reports
  </NavLink>


  <button
  onClick={() => setDarkMode(prev => !prev)}
  className="theme-toggle"
>
  {darkMode ? "☀️" : "🌙"}
</button>

</div>


        <div className="page-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports darkMode={darkMode} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
