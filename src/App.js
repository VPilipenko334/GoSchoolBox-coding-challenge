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
      number: "",
      operation: "",
      result: ""
    };

  }

  updateValues = (value) => {
    this.setState({ input: this.state.input + value });
  }

  add = () => {
    let firstNum = this.state.input;
    this.setState({ number: this.state.input, input: firstNum + "+", operation: "add"})
  }

  subtract = () => {
    let firstNum = this.state.input; 
    this.setState({ number: this.state.input, input: firstNum + "-", operation: "subtract" })
  }

  multiply = () => {
    let firstNum = this.state.input; 
    this.setState({ number: this.state.input, input: firstNum + "*", operation: "multiply" })
  }

  divide = () => {
    let firstNum = this.state.input; 
    this.setState({ number: this.state.input, input: firstNum + "/", operation: "divide" }) 
  }

  exponent = () => {
    let firstNum = this.state.input;
    this.setState({ number: this.state.input, input: firstNum + "^", operation: "exponent" })
  } 

// base case === subtraction 
//PEMDAS 

// loop thrugh once and check for parenthesis
// if '(' search from ')' --> evaluate parenthesis 
// look for more opening parenthesis, if not, elseif statement for exponent 
//no exponent --> keep going until subtraction 
// check if there is another pair of parenthesis until no pair are left 
// if no parenthesis are left in the whole thing; ;look for exponent 
// keep evaluating until subtraction --> left to right 

  evaluate = () => {
    const pemdas = [ '(', ')', '^', '*', '/', '+', '-']

    for(let i = 0; i < pemdas.length; i++) {
      if (this.state.input.includes('('))
        for(let j = 0; j < ')'; j++); {
          if (this.state.input.includes('('))
          // if it includes another opening parenthesis; exit the loop and check for another one parenthesis
          // keep checking for opening parenthesis until there are none left 
          // check for exponents here as well, go through the whole thing 
        } else {
          if (this.state.input.includes('^')) 
          // evaluate 
          // continue checking if there are more exponents 
          // if no exponents, look for multiplication 
          // if no multiplication, look for division
          // addition
          //subtraction 
        }
      }
    }

  }
  // base case ==> for () would just be a number 
  // remove parenthesis 




  // equals = () => {
  //   debugger 
  //     if (this.state.operation === "add" ) {
  //       this.setState({ result: parseInt(this.state.number) + parseInt(this.state.number) })
  //     } else if (this.state.operation === "subtract") {
  //       this.setState({ result: parseInt(this.state.input) - parseInt(this.state.number)})
  //     } else if (this.operation === "multiply") {
  //       this.setState({ result: parseInt(this.state.input) * parseInt(this.state.number)})
  //     } else if (this.operation === "divide") {
  //       this.setState({ result: parseInt(this.state.input) / parseInt(this.state.number )})
  //     } else if (this.operation === "exponent") {
  //       this.setState({ result: parseInt(this.state.input) ** parseInt(this.state.number )})
  //     }
  // }
  
  allClear = (e) => {
    e.preventDefault();
    this.setState({
      input: "",
      number: "",
      result: ""
    })
  }

  createdBy = (e) => {
    e.preventDefault();
    this.setState({
      input:"created by:",
      result: "Veronika Pilipenko"
    })
  }

  goBack = (e) => {
    e.preventDefault();
    this.setState({ 
      input: this.state.input.slice(0, this.state.input.length - 1) })
  }
 

  render() {
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
                <Button handleClick={this.equals}>=</Button>
              </div>

              <div className="clear-button-wrapper">
                    <button className="clear-button" onClick={this.allClear}>CLEAR</button>
                <br/>
                    <button className="created-by" onClick={this.createdBy}>Click me!</button>
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
