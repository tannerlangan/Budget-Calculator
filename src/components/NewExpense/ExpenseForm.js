import React, { useState } from "react";
import "./ExpenseForm.css";
import NewExpense from "./NewExpense";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");



  const titleChangeListener = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeListener = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeListener = (event) => {
    setEnteredDate(event.target.value);

  };

  const newExpenseListener = (event) => {
     event.preventDefault();

     const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date: new Date(enteredDate)
     };

     props.onSaveExpenseData(expenseData);
     setEnteredTitle('');
     setEnteredAmount('');
     setEnteredDate('');

  };

  return (
    <form onSubmit={newExpenseListener}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title </lable>
          <input type="text" value={enteredTitle} onChange={titleChangeListener} />
        </div>
        <div className="new-expense__control">
          <lable>Amount </lable>
          <input
            type="number"
            value={enteredAmount} 
            min="0.01"
            step="0.01"
            onChange={amountChangeListener}
          />
        </div>
        <div className="new-expense__control">
          <lable>Date </lable>
          <input
            type="date"
            value={enteredDate}
            min="2021-01-01"
            max="2025-12-31"
            onChange={dateChangeListener}
          />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type='submit'> Add Expense </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
