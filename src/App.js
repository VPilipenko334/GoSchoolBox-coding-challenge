import { useState } from 'react';

import Result from "./result";
import "./buttons.css";
import "./result.css";

function App() {

  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const allDigits = () => {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(
        <button key={i}>{i}</button>
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
                  < Result />
              </div>
            
              <div className="numbers">
                {allDigits()}
              <button>.</button>
              <button>=</button>
              </div>

              <div className="operators">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
              </div>

              <div className="clear-button">
                <button className="clear">CLEAR</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
