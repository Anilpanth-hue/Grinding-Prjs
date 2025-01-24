import React from "react";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <li>
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>
      <p>{new Date(expense.date).toLocaleDateString()}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
