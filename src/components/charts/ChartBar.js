import "./ChartBar.css";

function ChartBar(props) {
  let fillHeight = Math.round((props.point / props.max) * 100) - (5) + "%";

//   console.log(fillHeight);

  return (
    <div className="chart--bar">
      <div className="chart--fill" style={{ height: fillHeight }}></div>
    </div>
  );
}

export default ChartBar;
