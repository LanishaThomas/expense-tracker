import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Transactions from "./pages/Transactions";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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

  return (
    <div
      className={`
        min-h-screen transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700"
            : "bg-gradient-to-br from-[#F3EDE2] via-[#E8DCC8] to-[#D2B48C]"
        }
      `}
    >
      <Router>
        {/* Navbar */}
        <nav
          className="
            flex justify-between items-center
            px-8 py-4
            backdrop-blur-md
            bg-[#F0D3A1]/80
            dark:bg-gray-900
            shadow-md
            transition-colors duration-300
          "
        >
          {/* Logo / Title */}
          <h1 className="text-2xl font-bold text-[#4B3621] dark:text-white">
            Expense Tracker
          </h1>

          {/* Navigation Buttons + Toggle */}
          <div className="flex items-center space-x-4">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-[#A0522D] text-white dark:bg-gray-700"
                    : "bg-transparent text-[#4B3621] dark:text-gray-300 hover:bg-[#E8DCC8] dark:hover:bg-gray-800"
                }
                `
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/add"
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-[#87A96B] text-white dark:bg-gray-700"
                    : "bg-transparent text-[#4B3621] dark:text-gray-300 hover:bg-[#E8DCC8] dark:hover:bg-gray-800"
                }
                `
              }
            >
              Add Transaction
            </NavLink>

            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-[#8B4513] text-white dark:bg-gray-700"
                    : "bg-transparent text-[#4B3621] dark:text-gray-300 hover:bg-[#E8DCC8] dark:hover:bg-gray-800"
                }
                `
              }
            >
              Transactions
            </NavLink>

            {/* Animated Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="
                relative w-14 h-7 rounded-full
                bg-[#A0522D] dark:bg-gray-700
                transition-colors duration-300
              "
            >
              <span
                className={`
                  absolute top-1 left-1 w-5 h-5 rounded-full
                  bg-white flex items-center justify-center text-xs
                  transition-transform duration-300
                  ${darkMode ? "translate-x-7" : ""}
                `}
              >
                {darkMode ? "🌙" : "☀️"}
              </span>
            </button>

          </div>
        </nav>

        {/* Pages */}
        <div className="p-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
