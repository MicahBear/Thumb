export default function First() {
  const dontKnow = () => {
    // testing the dont know buttong is handled and outputs as f() says.
    // all good
    console.log("btn dont know was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pulling in user input from how js does it.
    const inputValue = e.target.elements.zoneInput.value;
    console.dir(inputValue);
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
        />
        <button type="submit">lets grow..</button>
      </form>
      <a className="first--btn" onClick={dontKnow}>
        don't know
      </a>
    </div>
  );
}
