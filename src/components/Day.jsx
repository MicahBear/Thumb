import React from "react";

export default function Day() {
  const renderDate = () => {
    const dateNow = new Date();
    console.log(dateNow);
  };
  return <>{renderDate()}</>;
}
