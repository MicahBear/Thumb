import React from "react";
import Day from "../components/Day";
import Veggie from "../components/Veggie";

export default function Calendar() {
  console.log(Veggie);
  return (
    <div className="calendar  justify-center">
      <table className="calendar--table">
        <thead>
          <tr className="calendar--table-row">
            <th className="calendar--table-header p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="calendar--day">sun</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center h-20">
            <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
              <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500">
                    <Day />
                  </span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500">2</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500">3</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500">4</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500">6</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500">7</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                  <div className="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">Shopping</span>
                    <span className="time">12:00~14:00</span>
                  </div>
                </div>
              </div>
            </td>
            <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 text-sm">8</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
