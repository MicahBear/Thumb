import React from "react";

export default function Week(week) {
  console.log([...week].map((el) => el + `fun`));
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-1">
      {[...week].map((el, idx) => (
        <p key={idx}>{el}</p>
      ))}
    </div>
  );
}
