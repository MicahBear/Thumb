import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    // pulling in user input from how js does it.
    const zone = e.target.elements.zoneInput.value;
    console.log(zone);
    // localStorage.setItem(grow, userZone);
    navigate("/dashboard", { state: { zone } });
  };

  return (
    <div className="first-page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="zoneInput">What's your grow zone?</label>
        <input
          id="zoneInput"
          type="text"
          className="first--input"
          placeholder="Zone 8b.."
          onChange={(e) => setUserZone(e.target.value)}
        />
        <a type="submit">lets grow..</a>
      </form>
      <a className="first--btn" onClick={dontKnow}>
        don't know
      </a>
    </div>
  );
}
