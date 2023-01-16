import { useEffect, useState } from "react";
function Veggie() {
  //   const [plant, setData] = useState();
  //   const { plantId } = useParams()

  //   useEffect(() => {
  //     fetch("/db.json")
  //       .then((response) => response.json())
  //       .then((plant) => setData(plant));
  //   }, []);

  const [plant, setPlant] = useState([]);
  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((info) => {
        console.log(info, "info");
        setPlant(info);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      {plant &&
        plant.length > 0 &&
        plant.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}

export default Veggie;

{
  /*
  011223
.changed from veggies.js to db.json to complete a fetch
.on fetch data is stored in data useState
.useEffect is happening so no infinite loop occurs.
*/
}
