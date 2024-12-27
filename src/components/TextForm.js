import React , {useState} from "react";
export default function TextForm(props) {
  const handleUpClick =  ()=>{
    
    setText("You have clicked on handleUpclick");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const [text ,setText] = useState('Enter text here');
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
          value={text} onChange={(event)=>setText(event.target.value)}
        ></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
    </>
  );
}
