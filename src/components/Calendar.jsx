import React from "react";

export default function Calendar() {
  return (
    <div className="calendar flex justify-center">
      <table className="calendar--table">
        <thead>
          <tr className="calendar--table-row">
            <th className="calendar--table-header p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="calendar--day">sun</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="calendar--table-date-row text-center h-20">
            <td className="calendar--table-date border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-slate-500">
              <div className="calendar--date-container flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="calendar--date-num-container top h-5 w-full">
                  <span className="calendar--date-num text-gray-500">1</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-slate-500">
              <div className="calendar--date-container flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="calendar--date-num-container top h-5 w-full">
                  <span className="calendar--date-num text-gray-500">2</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-slate-500">
              <div className="calendar--date-container flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden">
                <div className="calendar--date-num-container top h-5 w-full">
                  <span className="calendar--date-num text-gray-500">3</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-slate-500">
              <div className="calendar--date-container flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="calendar--date-num-container top h-5 w-full">
                  <span className="calendar--date-num text-gray-500">4</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-slate-500">
              <div className="calendar--date-container flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="calendar--date-num-container top h-5 w-full">
                  <span className="calendar--date-num text-gray-500">5</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-slate-500">
              <div className="calendar--date-container flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="calendar--date-num-container top h-5 w-full">
                  <span className="calendar--date-num text-gray-500">6</span>
                </div>
              </div>
            </td>
            <td className="calendar--table-date border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-slate-500">
              <div className="calendar--date-container flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="calendar--date-num-container top h-5 w-full">
                  <span className="calendar--date-num text-gray-500">7</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
