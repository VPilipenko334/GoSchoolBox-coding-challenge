import React from "react";
import { Component } from "react";

import Result from "./result";
import Input from './input';
import "./calculator.css";
import "./buttons.css";
import "./result.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      num1: "",
      num2: "",
      operation: "",
      result: ""
    };
  }

  updateValues = (val) => {
    this.setState({ input: this.state.input + val });
  }
  
  // const [input, setInput] = useState("")
  // const [result, setResult] = useState("")

  // { input === "" ? 0 : input };
  

  // const updateValues = (val) => {
  //   setInput(input + val);

  //   setResult("0");
  // }

  //not functional; needs additional logic 
  // const addZero = (val) => {
  //   if (this.state.input !== "") {
  //     this.setInput(this.state.input + val)
  //   }
  // }

  allClear = () => {
    this.setState({ input: "" })
  }

  // const goBack = () => {
  //   setInput(input.slice(0, input.length -1)); 
  // }
  
  // allDigits = () => {
  //   let array = [];

  //   for (let i = 0; i < 10; i++) {
  //     array.push(
  //       <button onClick={() => updateValues(i)} key={i}>{i}</button>
  //     )
  //   }

  //   return array.reverse(); 
  // }
  render() {
  return (
      <div className="App">
        <div className="calculator-border">
            <div className="calculator-wrapper">
              <div className="calculator">
                <div className="result-wrapper">
                  {this.state.input}
                  {this.state.result}
                  {/* < Input />  */}
              </div>
            
            <div className="calculator-operators">
              <div className="numbers">
                <button handleClick={this.updateValues}>9</button>
                <button handleClick={this.updateValues}>8</button>
                <button handleClick={this.updateValues}>7</button>
                <button handleClick={this.updateValues}>6</button>
                <button handleClick={this.updateValues}>5</button>
                <button handleClick={this.updateValues}>4</button>
                <button handleClick={this.updateValues}>3</button>
                <button handleClick={this.updateValues}>2</button>
                <button handleClick={this.updateValues}>1</button>
                <button handleClick={this.updateValues}>0</button>
                <button handleClick={this.updateValues}>.</button>
                <button className="back-button">BK</button>

                {/* {allDigits()} */}
              {/* <button onClick={addZero}>0</button> */}
              {/* <button onClick={() => updateValues('.')}>.</button> */}
              {/* <button className="back-button">BK</button> */}
              </div>

              <div className="operators">
                <button className="operator" handleClick={this.updateValues}>+</button>
                <button className="operator" handleClick={this.updateValues}>-</button>
                <button className="operator" handleClick={this.updateValues}>*</button>
                <button className="operator" handleClick={this.updateValues}>/</button>
                <button className="operator" handleClick={this.updateValues}>(</button>
                <button className="operator" handleClick={this.updateValues}>)</button>
                <button className="operator" handleClick={this.updateValues}>^</button>
                <button className="operator">=</button>
            
              </div>

              <div className="clear-button">
                <button className="clear" onClick={this.allClear}>CLEAR</button>
                <br/>
                
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
                }
}

export default App;
