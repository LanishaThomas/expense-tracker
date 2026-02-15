import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from "react-router-dom";
import styles from "./AddTransaction.module.css";

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionContext);
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(today);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || amount <= 0 || !category.trim()) {
      alert("Fill all fields properly");
      return;
    }

    addTransaction({
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      type,
      category: category.trim(),
      date: new Date(date).toISOString(),
    });

    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add Transaction</h2>

      <form onSubmit={handleSubmit} className={styles.form}>

        <div>
          <label className={styles.label}>Description</label>
          <input
            type="text"
            placeholder="e.g. Grocery Shopping"
            className={styles.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className={styles.label}>Amount</label>
          <input
            type="number"
            placeholder="₹ 0.00"
            className={styles.input}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className={styles.label}>Transaction Type</label>

          <div className={styles.toggleWrapper}>
            <button
              type="button"
              onClick={() => setType("expense")}
              className={`${styles.toggleBtn} ${
                type === "expense" ? styles.activeExpense : ""
              }`}
            >
              Expense
            </button>

            <button
              type="button"
              onClick={() => setType("income")}
              className={`${styles.toggleBtn} ${
                type === "income" ? styles.activeIncome : ""
              }`}
            >
              Income
            </button>
          </div>
        </div>

        <div>
          <label className={styles.label}>Category</label>
          <input
            type="text"
            placeholder="e.g. Food, Travel, Rent"
            className={styles.input}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label className={styles.label}>Date</label>
          <input
            type="date"
            className={styles.input}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max={today}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Add Transaction
        </button>

      </form>
    </div>
  );
};

export default AddTransaction;
