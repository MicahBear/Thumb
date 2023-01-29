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
      <main className="container mx-auto mt-10 bg-white rounded shadow w-full">
        <div className="dashboard--calendar">
          <Calendar />
        </div>
      </main>
      <div className="dashboard--info-container border">
        <div className="dashboard--schedule">
          <i className="fa-solid fa-circle-chevron-down"></i>
          <h4>schedule</h4>
        </div>
      </div>
    </div>
  );
}
