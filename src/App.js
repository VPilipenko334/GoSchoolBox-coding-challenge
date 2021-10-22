import React from "react";
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
  
  allClear = () => {
    this.setState({ input: "" })
  }

  goBack = () => {
    this.setState({ input: this.state.input.slice(0, this.state.input.length) })
  }
 
  render() {
  return (
      <div className="App">
        <div className="calculator-border">
            <div className="calculator-wrapper">
              <div className="calculator">
                <div className="result-wrapper">
                  < Input />
                  < Result />
              </div>
            
            <div className="calculator-operators">
              <div className="numbers">
                <button onClick={this.updateValues}>9</button>
                <button onClick={this.updateValues}>8</button>
                <button onClick={this.updateValues}>7</button>
                <button onClick={this.updateValues}>6</button>
                <button onClick={this.updateValues}>5</button>
                <button onClick={this.updateValues}>4</button>
                <button onClick={this.updateValues}>3</button>
                <button onClick={this.updateValues}>2</button>
                <button onClick={this.updateValues}>1</button>
                <button onClick={this.updateValues}>0</button>
                <button onClick={this.updateValues}>.</button>
                <button className="back-button" onClick={this.goBack}>BK</button>
              </div>

              <div className="operators">
                <button className="operator" onClick={this.updateValues}>+</button>
                <button className="operator" onClick={this.updateValues}>-</button>
                <button className="operator" onClick={this.updateValues}>*</button>
                <button className="operator" onClick={this.updateValues}>/</button>
                <button className="operator" onClick={this.updateValues}>(</button>
                <button className="operator" onClick={this.updateValues}>)</button>
                <button className="operator" onClick={this.updateValues}>^</button>
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
