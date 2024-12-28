import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    setText("You have clicked on handleUpclick");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearText = () => {
    setText("");
  };
  const handleSort = () => {
    let newText = text.split(" ").sort().join(" ");
    setText(newText);
  };

  const [text, setText] = useState("");
  //text = "new Text"  wrong way to change the state
  //setText("new Text") correct way to change the state

  return (
    <>
      <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.heading}</h2>
        </label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-4" onClick={handleSort}>
          Sort
        </button>

        <button className="btn btn-primary my-4 mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length}characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
