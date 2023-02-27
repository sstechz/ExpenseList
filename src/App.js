import "./App.css";

import React, {useState} from "react";
import NewExpense from "./components/newExpense/NewExpense";
import ExpenseList from "./components/expenses/ExpenseList";
import Chart from "./components/charts/ChartContainer";

const dummyExpense = [
  {
    id: "e1",
    title: "Tubelight",
    amount: 74.12,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e2",
    title: "Notebook",
    amount: 60.12,
    date: new Date(2021, 9, 30),
  },
  {
    id: "e3",
    title: "Perfume",
    amount: 134.12,
    date: new Date(2023, 3, 6),
  },
  {
    id: "e4",
    title: "Apple",
    amount: 104.36,
    date: new Date(2023, 7, 3),
  },
  {
    id: "e5",
    title: "Shipment",
    amount: 60.73,
    date: new Date(2023, 9, 2),
  },
  {
    id: "e6",
    title: "Dinner",
    amount: 200.56,
    date: new Date(2023, 6, 1),
  }
];

function App() {
  
  const [expenses, setExpenses] = useState(dummyExpense);

  const getData = (data) => {
    console.log(data);
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onFormSubmission={getData}/>
      <Chart object={expenses}/>
      <ExpenseList object={expenses}/>   
      {/* passed the expenses object to the child component */}
    </div>
  );
}

export default App;
