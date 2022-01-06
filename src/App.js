import Expenses from "./components/Expenses/Expenses";
import "./components//Expenses/Expenses.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "01",
    title: "Car Insurance",
    amount: 308.27,
    date: new Date(2021, 2, 28),
  },
  {
    id: "02",
    title: "Rent",
    amount: 400,
    date: new Date(2021, 2, 28),
  },
  {
    id: "03",
    title: "Phone Bill",
    amount: 102.33,
    date: new Date(2021, 2, 28),
  },
  {
    id: "04",
    title: "Dog",
    amount: 590.0,
    date: new Date(2021, 10, 22),
  },
];

function App() {
  
  const[expenses, setNewExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseListener = expense => {
    setNewExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseListener}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
