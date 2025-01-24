import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterYear, setFilterYear] = useState("All");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      filterYear === "All" || new Date(expense.date).getFullYear().toString() === filterYear
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Filter selectedYear={filterYear} onChangeFilter={setFilterYear} />
      <ExpenseList expenses={filteredExpenses} onDeleteExpense={deleteExpenseHandler} />
      <p>Total Expenses: ₹{filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0)}</p>
    </div>
  );
};

export default App;
