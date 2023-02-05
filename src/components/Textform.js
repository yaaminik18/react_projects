import React  from 'react'
import {useState} from 'react'
export default function Textform() {
   
   
    const handleUpClick= ()=>{
let newText= text.toUpperCase();
setText(newText);
    }
    const handleOnChange= (event)=>{
      setText(event.target.value)
    }
    const [text, setText] = useState("enter text here");
  return (
    
    <div>
      <div className="mb-3">
  <label for="mybox" className="form-label">Enter your text here</label>
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase </button>
    </div>
  )
}
