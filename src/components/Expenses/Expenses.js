import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const savedYearListener = (selectedYear) => {
    setEnteredYear(selectedYear);
    console.log(enteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSelectYear={savedYearListener}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
