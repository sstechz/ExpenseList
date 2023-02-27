import "./ChartContainer.css";
import ChartMonth from "./ChartMonth";

function Chart(props) {
  const months = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  let maxValue = 0;

  for (const expense of props.object) {
    const expenseMonth = expense.date.getMonth();
    months[expenseMonth].value += expense.amount;
  }

  const monthArr = months.map((el) => el.value);

  maxValue = Math.max(...monthArr);

  console.log(maxValue);

  return (
    <div className="chart--container">
      <div className="chart--body">
        {months.map((el) => (
          <ChartMonth
            month={el.label}
            value={el.value}
            key={el.label}
            max={maxValue}
          />
        ))}
      </div>
    </div>
  );
}

export default Chart;

// Jan
// Feb
// Mar
// Apr
// May
// Jun
// Jul
// Aug
// Sep
// Oct
// Nov
// Dec
