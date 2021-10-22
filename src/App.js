import { useState } from 'react';

import Result from "./result";
import Input from './input';
import "./calculator.css";
import "./buttons.css";
import "./result.css";

function App() {
  
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const updateValues = (val) => {
    setInput(input + val);

    setResult("");
  }

  //not functional; needs additional logic 
  // const addZero = (val) => {
  //   if (this.state.input !== "") {
  //     this.setInput(this.state.input + val)
  //   }
  // }

  const Allclear = () => {
    setResult("");
    setInput("");
  }

  const goBack = () => {
    setInput(input.slice(0, input.length -1)); 
  }
  
  const allDigits = () => {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(
        <button onClick={() => updateValues(i)} key={i}>{i}</button>
      )
    }

    return array.reverse(); 
  }

  return (
      <div className="App">
        <div className="calculator-border">
            <div className="calculator-wrapper">
              <div className="calculator">
                <div className="result-wrapper">
                  <Result result={result} /> 
                  <Input input={input} />
              </div>
            
            <div className="calculator-operators">
              <div className="numbers">
                {allDigits()}
              {/* <button onClick={addZero}>0</button> */}
              <button onClick={() => updateValues('.')}>.</button>
              <button onClick={() => goBack()} className="back-button">BK</button>
              </div>

              <div className="operators">
                <button className="operator" onClick={() => updateValues('+')}>+</button>
                <button className="operator" onClick={() => updateValues('-')}>-</button>
                <button className="operator" onClick={() => updateValues('*')}>*</button>
                <button className="operator" onClick={() => updateValues('/')}>/</button>
                <button className="operator" onClick={() => updateValues('(')}>(</button>
                <button className="operator" onClick={() => updateValues(')')}>)</button>
                <button className="operator" onClick={() => updateValues('^')}>^</button>
                <button className="operator">=</button>
              </div>

              <div className="clear-button">
                <button className="clear" onClick={Allclear}>CLEAR</button>
                <br/>
                
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;
