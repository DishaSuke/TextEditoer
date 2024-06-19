import React, { useState } from 'react'

function Textarea() {

  const [text, setText] = useState("")

  const onHandleChange = (event) => {
    setText(event.target.value)

  }

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const clearText = () => {
    setText("")
  }

    
const punctuation = ()=>{
   let  punctuation = /[\.!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g ;
   let newText =text.replace(punctuation,"");
   setText(newText)

}


const extraspace = () => {
  let newText = text.replace(/ +/g, ' ');
  setText(newText)
}



  return (
    <>
      <div className="container my-4">
        <div className="form-group">
          <h3>Drop the text to see Magic</h3>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='enter your text' rows="10" value={text} onChange={onHandleChange}></textarea>
        </div>
      </div>




      <div className="container">
        <button type="button" className="mt-3 btn btn-secondary mr-2" onClick={upperCase}>uppercase</button>
        <button type="button" className="mt-3 btn btn-secondary mr-2" onClick={lowerCase}>lowercase</button>
        <button type="button" className="mt-3 btn btn-secondary mr-2" onClick={clearText}>clear</button>
        <button type="button" className="mt-3 btn btn-secondary mr-2" onClick={punctuation}>punctuation</button>
        <button type="button" className="mt-3 btn btn-secondary mr-2" onClick={extraspace}>extraspace</button>

      </div>

      <div className="container my-4">
          <h4>Preview Your text</h4>
          <h3><code>
            {text}
          </code></h3>
          <h6>{text.split(" ").length} words and {text.split('').length} characters</h6>
          <h6>{0.50 * text.split(' ').length} Seconds Reading Time</h6>
      </div>
    </>
  )
}

export default Textarea;
