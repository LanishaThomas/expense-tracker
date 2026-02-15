import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
