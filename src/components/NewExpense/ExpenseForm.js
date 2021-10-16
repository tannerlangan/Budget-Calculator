import React, { lazy } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title </lable>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <lable>Amount </lable>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <lable>Date </lable>
          <input type="date" min="2021-01-01" max="2025-12-31" />
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
