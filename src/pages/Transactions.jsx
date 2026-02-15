import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import styles from "./Transactions.module.css";

const Transactions = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  // Sort newest first
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Transaction Ledger</h2>

      <div className={styles.wrapper}>
        {transactions.length === 0 ? (
          <p className={styles.empty}>No transactions yet.</p>
        ) : (
          <div className={styles.tableScroll}>
            <table className={styles.table}>

              <thead className={styles.thead}>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th className={styles.center}>Action</th>
                </tr>
              </thead>

              <tbody>
                {sortedTransactions.map((t) => (
                  <tr key={t.id} className={styles.row}>
                    
                    <td className={styles.description}>
                      {t.description}
                    </td>

                    <td
                      className={`${styles.amount} ${
                        t.type === "income"
                          ? styles.income
                          : styles.expense
                      }`}
                    >
                      ₹ {t.amount}
                    </td>

                    <td>
                      <span
                        className={`${styles.badge} ${
                          t.type === "income"
                            ? styles.incomeBadge
                            : styles.expenseBadge
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>

                    <td>{t.category}</td>

                    <td>
                      {t.date
                        ? new Date(t.date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </td>

                    <td className={styles.center}>
                      <button
                        onClick={() => deleteTransaction(t.id)}
                        className={styles.deleteBtn}
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
