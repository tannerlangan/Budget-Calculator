import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {


  const [defaultForm, setExpenseForm] = useState(false);

  const savedExpenseDataListener = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpenseForm(false);
  };

  const cancelExpenseListener = (cancelledExpense) => {
    setExpenseForm(cancelledExpense);
  };

  const newExpenseListener = (event) => {
    setExpenseForm(true);
  };

  if (defaultForm === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
        onCancelExpenseData={cancelExpenseListener}
          onSaveExpenseData={savedExpenseDataListener}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button type="button" onClick={newExpenseListener}>
          Add New Expense
        </button>
      </div>
    );
  }
}

export default NewExpense;
