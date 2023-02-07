import React  from 'react'
import {useState} from 'react'
import './Textform.css'
export default function Textform() {
   
   
const handleUpClick= ()=>{
let newText= text.toUpperCase();
setText(newText);
}
const handleLoClick= ()=>{
let newText= text.toLowerCase();
setText(newText);
}
const handleClearText= ()=>{

setText('');
}

const handleOnChange= (event)=>{
setText(event.target.value)
}
    
    const [text, setText] = useState("enter text here");
  return (
  <>
    <div className='container'>
      <div className="mb-3">
  <label for="mybox" className="form-label">Enter your text here</label>
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase </button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase </button>
<button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className='container my-2'>
      <h4>Your text summary</h4>
      <table style={{width:"100%"}}>
        <thead>
          <tr><th style={{width:"70%"}}> Summary </th></tr>
        </thead>
        <tbody>
          <tr><td>Total words</td>
          <td> {text.split(' ').length-1}</td></tr>
          <tr><td>Total characters</td>
          <td> {text.length}</td></tr>
        </tbody>
        <tr><td>Total characters without spaces  </td>
          <td> {text.replace(/\s/g, "").length}</td></tr>
      </table>
      <p>{text.split(' ').length-1} words and {text.length} characters {text.replace(/\s/g, "").length} </p>
    </div>
    </> 
  )
}
