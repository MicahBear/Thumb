import React from "react";
export default function Month({ month }) {
  let weekArray = [];
  console.log(typeof Array.from(month));
  // console.log(month[0][3], "look at me now");
  month.forEach((day) => weekArray.push(day));
  console.log(typeof weekArray);

  return <div className="flex-1 grid grid-cols-7 grid-rows-5">{weekArray}</div>;
}

{
  /* <div className="flex-1 grid grid-cols-7 grid-rows-5">
  {month.map((row, i) => (
    <React.Fragment key={i}>
      {row.map((day, idx) => (
        <Day day={day} key={idx} rowIdx={i} />
      ))}
    </React.Fragment>
  ))}
</div>; */
}
