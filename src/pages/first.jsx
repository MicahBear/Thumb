export default function First() {
  function dontKnow() {
    // testing the dont know buttong is handled and outputs as f() says.
    // all good
    console.log("btn dont know was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // currently submit is handled by enter key from user. the onsubmit btn would cause a refresh. and the target would be incorrect.
    // currently this console log out puts the value the user inputs.
    console.log(e.target[0].value);
  }

  return (
    <div className="first-page">
      <h2>What's your grow zone?</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="first--input" placeholder="Zone 8b.." />
        {/*need addtional review*/}
        {/* <a type="submit">lets grow</a> */}
      </form>
      <a className="first--btn" onClick={dontKnow}>
        don't know
      </a>
    </div>
  );
}
