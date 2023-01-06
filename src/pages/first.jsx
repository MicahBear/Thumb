export default function First() {
  const dontKnow = () => {
    // testing the dont know buttong is handled and outputs as f() says.
    // all good
    console.log("btn dont know was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pulling in user input from how js does it.
    const inputValue = document.querySelector(".first--input").value;
    console.log(inputValue);
  };

  return (
    <div className="first-page">
      <h2>What's your grow zone?</h2>
      <div>
        <input type="text" className="first--input" placeholder="Zone 8b.." />
        <button onClick={handleSubmit}>lets grow..</button>
      </div>
      <a className="first--btn" onClick={dontKnow}>
        don't know
      </a>
    </div>
  );
}
