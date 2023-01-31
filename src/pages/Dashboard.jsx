import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Schedule from "../components/Schedule";
import Calendar from "./Calendar";
export default function Dashboard() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="dashboard-page">
      <div className="dashboard--nav">
        <Nav />
      </div>
      <main className="container mx-auto mt-10 bg-white rounded shadow w-full">
        <div className="mb-4 pb-2 dashboard--calendar">
          <Calendar />
        </div>
      </main>
      <div className="container mx-auto flex flex-col justify-center border dashboard--info-container ">
        <div className="dashboard--schedule">
          <i className="fa-solid fa-circle-chevron-down"></i>
          <h4>schedule</h4>
          <Schedule />
        </div>
      </div>
    </div>
  );
}
