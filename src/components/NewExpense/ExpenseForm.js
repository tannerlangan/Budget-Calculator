import React, { useState } from "react";
import "./ExpenseForm.css";

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
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelExpenseListener = (event) => {

    event.preventDefault();
    props.onCancelExpenseData(false);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title </lable>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeListener}
          />
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
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeListener}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={newExpenseListener}> Add Expense </button>
        <button type="button" onClick={cancelExpenseListener}> Cancel </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
