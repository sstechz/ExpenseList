import "./ExpenseList.css";

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

let temp = 2019;  //  initial view of lists corresponding 2019

function ExpenseList(props) {

  const [filteredYear, setFilteredYear] = useState(2023);

  let filterHandler = (event) => {
    temp = event.target.value;
    setFilteredYear(event.target.value);
  };

  const filYear = (obj) => {
    if (obj.date.getFullYear() == temp) return obj;
  };

  const filteredExpenses = props.object.filter(filYear);

  // console.log(filteredExpenses);

  return (
    <div className="App">
      <div className="filterYear">
        Filter By Year
        <select className="yearOption" onChange={filterHandler}>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>

      {/* Dynamic rendering of data */}

      {filteredExpenses.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
