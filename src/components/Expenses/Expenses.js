import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2019");

  const savedYearListener = (selectedYear) => {
    setEnteredYear(selectedYear);
    console.log(enteredYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSelectYear={savedYearListener}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items ={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
