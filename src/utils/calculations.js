export const calculateTotals = (transactions) => {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return {
    income,
    expense,
    balance: income - expense
  };
};
