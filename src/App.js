import React from "react";
import Button from "./components/button";
import Result from "./components/result";
import Input from './components/input';
import "./stylesheets/calculator.css"
import "./stylesheets/button.css";
import "./stylesheets/result.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      prevNum: "",
      nextNum: "",
      operation: "",
      result: ""
    };

  }

  // setPrevNum(e) {
  //   const prevNum = e.target.value ? parseInt(e.target.value) : ""
  //   this.setState( { prevNum });
  // }

  // setNextNum(e) {
  //   const nextNum = e.target.value ? parseInt(e.target.value) : ""
  //   this.setState( { nextNum })
  // }

  add = () => {
    this.state.prevNum = this.state.input;
    const firstNum = this.state.input;
    this.setState({ input: firstNum + "+" })
    this.setState.operation = "add";
  }

  subtract = () => {
    this.state.prevNum = this.state.input;
    const firstNum = this.state.input; 
    this.setState({ input: firstNum + "-" })
    this.setState.operation = "subtract"
  }

  multiply = () => {
    this.state.prevNum = this.state.input;
    const firstNum = this.state.input; 
    this.setState({ input: firstNum + "*" })
    this.setState.operation = "multiply"
  }

  divide = () => {
    this.state.prevNum = this.state.input; 
    const firstNum = this.state.input; 
    this.setState({ input: firstNum + "/" })
    this.setState.operation = "divide"
  }

  exponent = () => {
    this.state.preventDefault = this.state.input;
    const firstNum = this.state.input;
    this.setState({ input: firstNum + "^" })
    this.setState.operation = "exponent"
  } 

  updateValues = (value) => {
    this.setState({ input: this.state.input + value });
  }

  equals = (e) => {
    e.preventDefault();
    this.state.prevNum = this.state.input; 

      if (this.state.operation === "add" ) {
        this.setState({ input: parseInt(this.state.prevNum) + parseInt(this.state.nextNum) })
      } else if (this.state.operation === "subtract") {
        this.setState({ input: parseInt(this.state.prevNum) - parseInt(this.state.nextNum)})
      } else if (this.operation === "multiply") {
        this.setState({ input: parseInt(this.state.prevNum) * parseInt(this.state.nextNum )})
      } else if (this.operation === "divide") {
        this.setState({ input: parseInt(this.state.prevNum) / parseInt(this.state.nextNum )})
      } else if (this.operation === "exponent") {
        this.setState({ input: parseInt(this.state.prevNum) ** parseInt(this.state.nextNum )})
      }
  }
  
  allClear = (e) => {
    e.preventDefault();
    this.setState({
      input: "",
      prevNum: "",
      nextNum: "",
      result: ""
    })
  }


  goBack = (e) => {
    e.preventDefault();
    this.setState({ 
      input: this.state.input.slice(0, this.state.input.length - 1) })
  }
 

  render() {
    const { input, prevNum, nextNum, result } = this.state; 
    return (
      <div className="App">
        <div className="calculator-border">
            <div className="calculator-wrapper">
              <div className="calculator">
                <div className="result-wrapper">
      
                  <Input>
                    {this.state.input === "" ? 0 : this.state.input}
                  </Input>

                  <Result>
                    {this.state.result}
                  </Result>
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
                <button onClick={this.goBack} className="back-button">BK</button>
              </div>

              <div className="numbers">
                <Button handleClick={this.add}>+</Button>
                <Button handleClick={this.subtract}>-</Button>
                <Button handleClick={this.multiply}>*</Button>
                <Button handleClick={this.divide}>/</Button>
                <Button handleClick={this.updateValues}>(</Button>
                <Button handleClick={this.updateValues}>)</Button>
                <Button handleClick={this.exponent}>^</Button>
                <Button handleCLick={this.equals}>=</Button>
            
              </div>

              <div className="clear-button-wrapper">
                    <button className="clear-button" onClick={this.allClear}>CLEAR</button>
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
