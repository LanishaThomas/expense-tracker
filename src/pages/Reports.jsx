import { useContext, useMemo } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";
import styles from "./Reports.module.css";

const COLORS = ["#A0522D", "#87A96B", "#8B4513", "#D2B48C", "#5C3317"];

const Reports = ({ darkMode }) => {
  const { transactions } = useContext(TransactionContext);

  /* 1️⃣ Expense by Category (for Doughnut + Horizontal Bar) */
  const expenseByCategory = useMemo(() => {
    const data = {};

    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        data[t.category] = (data[t.category] || 0) + t.amount;
      });

    return Object.entries(data).map(([name, value]) => ({
      name,
      value
    }));
  }, [transactions]);

  /* 2️⃣ Monthly Income vs Expense */
  const monthlyData = useMemo(() => {
    const data = {};

    transactions.forEach((t) => {
      const month = new Date(t.date).toLocaleString("en-IN", {
        month: "short",
        year: "numeric"
      });

      if (!data[month]) {
        data[month] = { month, income: 0, expense: 0 };
      }

      data[month][t.type] += t.amount;
    });

    return Object.values(data);
  }, [transactions]);

  const trendData = useMemo(() => {
  const data = {};

  transactions.forEach((t) => {
    const date = new Date(t.date).toLocaleDateString("en-IN");

    if (!data[date]) {
      data[date] = { date, income: 0, expense: 0 };
    }

    data[date][t.type] += t.amount;
  });

  return Object.values(data).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
}, [transactions]);


  const lightPalette = [
  "#A0522D",
  "#87A96B",
  "#EBBE43",
  "#D2B48C",
  "#E96D1B",
  "#C2B280",
  "#B8860B"
];

const darkPalette = [
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#3b82f6",
  "#a78bfa",
  "#f472b6",
  "#22d3ee"
];

const isDark = document.documentElement.classList.contains("dark");
const palette = darkMode ? darkPalette : lightPalette;


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Analytics & Reports</h2>

      {/* 1️⃣ Doughnut Chart */}
      <div className={styles.card}>
        <h3>Expense Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={expenseByCategory}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
            >
              {expenseByCategory.map((entry, index) => (
                <Cell
                    key={`cell-${index}`}
                    fill={palette[index % palette.length]}
                />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 2️⃣ Income vs Expense Bar Chart */}
      <div className={styles.card}>
        <h3>Monthly Income vs Expense</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill={isDark ? "#10b981" : "#87A96B"} />
            <Bar dataKey="expense" fill={isDark ? "#ef4444" : "#A0522D"} />

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3️⃣ Expense Trend Line Chart */}
      <div className={styles.card}>
  <h3>Income vs Expense Trend</h3>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={trendData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Line
        type="monotone"
        dataKey="income"
        stroke={isDark ? "#10b981" : "#87A96B"}
        strokeWidth={3}
        dot={false}
      />

      <Line
        type="monotone"
        dataKey="expense"
        stroke={isDark ? "#ef4444" : "#A0522D"}
        strokeWidth={3}
        dot={false}
      />

    </LineChart>
  </ResponsiveContainer>
</div>


      {/* 4️⃣ Horizontal Bar (Category Totals) */}
      <div className={styles.card}>
        <h3>Category Totals</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={expenseByCategory}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
                <Bar dataKey="value">
                    {expenseByCategory.map((entry, index) => (
                        <Cell
                        key={`bar-${index}`}
                        fill={palette[index % palette.length]}
                        />
                    ))}
                </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
