import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <div className="expense--item">
      <ExpenseDate date={props.date} />
      <div className="expense--title">{title}</div>
      <div className="expense--amount">$ {props.amount}</div>
      <button onClick={clickHandler}>BUTTON</button>
    </div>
  );
}

export default ExpenseItem;
