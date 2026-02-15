import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from "react-router-dom";
import styles from "./AddTransaction.module.css";

const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionContext);
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || amount <= 0 || !category) {
      alert("Fill all fields properly");
      return;
    }

    addTransaction({
      id: Date.now(),
      description,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString(),
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

        <button type="submit" className={styles.submitBtn}>
          Add Transaction
        </button>

      </form>
    </div>
  );
};

export default AddTransaction;
