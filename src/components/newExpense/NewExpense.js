import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const changeTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault(); //  bcoz every time the submit button being pressed the form gets refreshed.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random()
    };

    // console.log(expenseData);
    // passing the content from child to parent component
    props.onFormSubmission(expenseData);


    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="new--expense--controls">
        <div className="new--expense--control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={changeTitle} />
        </div>
        <div className="new--expense--control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01 "
            value={enteredAmount}
            onChange={changeAmount}
          />
        </div>
        <div className="new--expense--control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={changeDate}
          />
        </div>
      </div>
      <button className="new--expense--submit">SUBMIT</button>
    </form>
  );
}

export default NewExpense;
