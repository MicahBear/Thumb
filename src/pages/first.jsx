import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
export default function First() {
  const [userZone, setUserZone] = useState("");

  const navigate = useNavigate();
  const dontKnow = () => {
    // testing the dont know buttong is handled and outputs as f() says.
    // all good
    console.log("btn dont know was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pulling in user input
    const zone = e.target.elements.zoneInput.value;
    console.log(zone);
    // localStorage.setItem(zone, zone);
    navigate("/dashboard", { state: { zone } });
  };

  return (
    <div>
      <Nav />
      <main className="first-page flex items-center justify-center min-h-screen">
        <section className="first--container container flex flex-col items-center justify-center relative bg-white">
          <form className="first--form flex flex-col" onSubmit={handleSubmit}>
            <h1
              className="first--labelInput text-xl font-bold"
              htmlFor="zoneInput"
            >
              What's your grow zone?
            </h1>
            <input
              id="zoneInput"
              type="text"
              className="first--input  appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="enter zone"
              onChange={(e) => setUserZone(e.target.value)}
            />
            <hr />
            <div className="flex items-center justify-between">
              <button
                className="hover:text-gray-300 font-bold py-2 px-4 rounded focus:shadow-outline first--submit"
                type="submit"
              >
                lets grow..
              </button>

              <a
                className="first--dkBtn align-baseline font-bold text-sm text-blue-500 hover:text-gray-300 cursor-pointer"
                onClick={dontKnow}
              >
                don't know
              </a>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
