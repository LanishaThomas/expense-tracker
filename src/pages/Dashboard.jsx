import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Overview</h2>

      <div className={styles.grid}>

        <div className={styles.card}>
          <p className={styles.label}>Balance</p>
          <h3 className={`${styles.amount} ${styles.balance}`}>
            ₹ {balance}
          </h3>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Income</p>
          <h3 className={`${styles.amount} ${styles.income}`}>
            ₹ {income}
          </h3>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>Expenses</p>
          <h3 className={`${styles.amount} ${styles.expense}`}>
            ₹ {expense}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
