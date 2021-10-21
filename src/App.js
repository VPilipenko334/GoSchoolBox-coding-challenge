import { useState } from 'react';

import Result from "./result";
import "./buttons.css";
import "./result.css";

function App() {
  
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const updateValues = (val) => {
    setInput(input + val);
  }

  // const handleClick = (e) => {
  //   setResult(result.concat(e.target.name));
  // }

  const Allclear = () => {
    setResult("");
  }

  const goBack = () => {
    setResult(result.slice(0, result.length -1)); 
  }
  
  const allDigits = () => {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(
        <button onClick={() => updateValues(i)} key={i}>{i}</button>
      )
    }

    return array.reverse(); 
    // return array; 
  }

  return (
      <div className="App">
        <div className="calculator-border">
            <div className="calculator-wrapper">
              <div className="calculator">
                <div className="result">
                  {/* < Result />  */}
                  {result}
                  {input}
              </div>
            
              <div className="numbers">
                {allDigits()}
              <button onClick={() => updateValues('.')}>.</button>
              <button>=</button>
              </div>

              <div className="operators">
                <button onClick={() => updateValues('+')}>+</button>
                <button onClick={() => updateValues('-')}>-</button>
                <button onClick={() => updateValues('*')}>*</button>
                <button onClick={() => updateValues('/')}>/</button>
                <button onClick={() => updateValues('(')}>(</button>
                <button onClick={() => updateValues(')')}>)</button>
              </div>

              <div className="clear-button">
                <button className="clear" onClick={Allclear}>CLEAR</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
