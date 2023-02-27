import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const year = props.date.toLocaleString("default", { year: "numeric" });
  const date = props.date.toLocaleString("default", { day: "2-digit" });

  return (
    <div className="expense--date">
      <div className="month">{month}</div>
      <div>{year}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default ExpenseDate;
