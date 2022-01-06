import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <section className="expense-item__description">
        <h2>{props.title}</h2>
        <h2 className="expense-item__price">${props.amount}</h2>
      </section>
    </Card>
    </li>
  );
}

export default ExpenseItem;
