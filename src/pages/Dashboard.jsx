import Calendar from "../components/Calendar";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard--nav">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="dashboard--date">
        <h2 className="dashboard--month">January</h2>
        <h2 className="dashboard--year">2023</h2>
      </div>
      <div className="dashboard--calendar">
        <Calendar />
      </div>
      <div className="dashboard--info-container">
        <div className="dashboard--schedule">
          <i class="fa-solid fa-circle-chevron-down"></i>
          <h4>schedule</h4>
        </div>
      </div>
    </div>
  );
}
