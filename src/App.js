import React from "react";
import Button from "./components/button";
import BackButton from "./components/back_button";
import ClearButton from "./components/clear_button";
// import Result from "./components/result";
// import Input from './components/input';
import "./stylesheets/calculator.css"
import "./stylesheets/button.css";
import "./stylesheets/result.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      num1: "",
      num2: "",
      operation: "",
      result: "0"
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
                   {/* < Input /> 
                  < Result />  */}
                  <br />
                  {this.state.input}
                  <br/>
                  {this.state.result}
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
                <BackButton className="back-button" handleClick={this.goBack}>BK</BackButton>
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
                <ClearButton onClick={() => this.allClear}>CLEAR</ClearButton>
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
