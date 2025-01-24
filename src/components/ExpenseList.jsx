import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={() => onDeleteExpense(expense.id)}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
