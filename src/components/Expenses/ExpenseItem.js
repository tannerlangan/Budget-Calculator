import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Cat");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <section className="expense-item__description">
        <h2>{title}</h2>
        <h2 className="expense-item__price">${props.amount}</h2>
      </section>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
