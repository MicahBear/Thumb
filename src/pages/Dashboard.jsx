import { useLocation } from "react-router-dom";
import Calendar from "./Calender";
export default function Dashboard() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="dashboard-page">
      <div className="dashboard--nav">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="dashboard--date flex flex-row">
        <h2 className="dashboard--month">January</h2>
        <h2 className="dashboard--year">2023</h2>
      </div>
      <div className="dashboard--calendar">
        <Calendar />
        <h1></h1>
      </div>
      <div className="dashboard--info-container">
        <div className="dashboard--schedule">
          <i className="fa-solid fa-circle-chevron-down"></i>
          <h4>schedule</h4>
        </div>
      </div>
    </div>
  );
}
