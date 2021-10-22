import React from "react";
import Button from "./button";
import Result from "./result";
import Input from './input';
import "./calculator.css";
import "./button.css";
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

  updateValues = (value) => {
    this.setState({ input: this.state.input + value });
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
                  {this.state.input}
                  {/* {this.state.result} */}
              </div>
            
            <div className="calculator-operators">
              <div className="numbers">
                <Button handleClick={this.updateValues}>9</Button>
                <Button handleClick={this.updateValues}>8</Button>
                <Button handleClick={this.updateValues}>7</Button>
                <Button handleClick={this.updateValues}>6</Button>
                <Button handleClick={this.updateValues}>5</Button>
                <Button handleClick={this.updateValues}>4</Button>
                <Button handleClick={this.updateValues}>3</Button>
                <Button handleClick={this.updateValues}>2</Button>
                <Button handleClick={this.updateValues}>1</Button>
                <Button handleClick={this.updateValues}>0</Button>
                <Button handleClick={this.updateValues}>.</Button>
                <Button className="back-button" handleClick={this.goBack}>BK</Button>
              </div>

              <div className="numbers">
                <Button handleClick={this.updateValues}>+</Button>
                <Button handleClick={this.updateValues}>-</Button>
                <Button handleClick={this.updateValues}>*</Button>
                <Button handleClick={this.updateValues}>/</Button>
                <Button handleClick={this.updateValues}>(</Button>
                <Button handleClick={this.updateValues}>)</Button>
                <Button handleClick={this.updateValues}>^</Button>
                <Button>=</Button>
            
              </div>

              <div className="clear-button">
                <button className="clear" onClick={() => this.allClear}>CLEAR</button>
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
