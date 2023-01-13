import { useEffect, useState } from "react";

function Veggie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log({ data });
}

export default Veggie;

{
  /*
.changed from veggies.js to db.json to complete a fetch
.on fetch data is stored in data useState
.useEffect is happening so no infinite loop occurs.
*/
}
