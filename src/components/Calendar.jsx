import React from "react";

export default function Calendar() {
  return (
    <div className="calendar">
      <table className="calendar--table">
        <thead>
          <tr className="calendar--table-row">
            <th className="calendar--table-header">
              <span className="calendar--day">sun</span>
            </th>
            <th className="calendar--table-header">
              <span className="calendar--day">mon</span>
            </th>
            <th className="calendar--table-header">
              <span className="calendar--day">tues</span>
            </th>
            <th className="calendar--table-header">
              <span className="calendar--day">wed</span>
            </th>
            <th className="calendar--table-header">
              <span className="calendar--day">thur</span>
            </th>
            <th className="calendar--table-header">
              <span className="calendar--day">fri</span>
            </th>
            <th className="calendar--table-header">
              <span className="calendar--day">sat</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="calendar--table-date-row">
            <td className="calendar--table-date">
              <div className="calendar--date-container">
                <div className="calendar--date-num-container">
                  <span className="calendar--date-num">1</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date">
              <div className="calendar--date-container">
                <div className="calendar--date-num-container">
                  <span className="calendar--date-num">2</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date">
              <div className="calendar--date-container">
                <div className="calendar--date-num-container">
                  <span className="calendar--date-num">3</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date">
              <div className="calendar--date-container">
                <div className="calendar--date-num-container">
                  <span className="calendar--date-num">4</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date">
              <div className="calendar--date-container">
                <div className="calendar--date-num-container">
                  <span className="calendar--date-num">5</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date">
              <div className="calendar--date-container">
                <div className="calendar--date-num-container">
                  <span className="calendar--date-num">6</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date">
              <div className="calendar--date-container">
                <div className="calendar--date-num-container">
                  <span className="calendar--date-num">7</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
