import React from "react";

export default function Day(date) {
  const renderDate = () => {
    let days;
    const dateNow = new Date();
    // need to change and state and create a possible utility.
    for (let i = 0; i < 7; i++) {
      dateNow.setDate(dateNow.getDate() + 1);
      days = dateNow.toLocaleDateString();
      console.log(days);
      return days;
    }
  };
  return <>{renderDate()}</>;
}
