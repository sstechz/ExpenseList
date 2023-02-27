import "./ChartMonth.css";
import ChartBar from "./ChartBar";

function ChartMonth(props) {

  return (
    <div className="chart--content">
      <ChartBar point={props.value} max={props.max}/>
      <div className="chart--month">{props.month}</div>
    </div>
  );
}

export default ChartMonth;
