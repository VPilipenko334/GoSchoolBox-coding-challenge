import React from "react";
import Button from "./components/button";
import Submit from "./components/submit";
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


 evalEMDAS(expr) {
  // Split the expression on any simple operator using Regex
  // e.g. if expr === '1.0+3', then nums === ['1.0', '3']
  let nums = expr.split(/[\*\/\^\+\-]/);
  //  let nums = expr.split(/[*/^+-]/);

  // If there are no operators remaining, return the only number
  if (nums.length === 1) {
    return nums[0];
  };

  // Split the expression on any numbers using Regex, keeping decimal places
  // e.g. if expr === '1.0+3', then operators === ['+']
  let operators = expr.split(/\d*\.*\d/).filter(opr => opr !== "");

  if (operators.includes("^")) {
    let oprIdx = operators.indexOf("^");
    let i = 1;
    let result = parseFloat(nums[oprIdx]);
    while (i < parseInt(nums[oprIdx + 1])) {
      result *= parseFloat(nums[oprIdx]);
      i++;
    }
    nums.splice(oprIdx, 2, result.toString()).join();
    operators.splice(oprIdx, 1);
    return this.evalEMDAS(this.merge(nums, operators));
  } else if (operators.includes("*")) {
    // Find the first '*' operator
    let oprIdx = operators.indexOf("*");

    // Calculate the result of the nums adjacent to the found operator
    let result = parseFloat(nums[oprIdx]) * parseFloat(nums[oprIdx + 1]);

    // Replace the two operated-on nums with the resulting num
    nums.splice(oprIdx, 2, result.toString());

    // Remove the used operator from the operators array
    operators.splice(oprIdx, 1);

    // Merge the nums and operators arrays to get the next expression,
    // then recursively call this  with that expression
    return this.evalEMDAS(this.merge(nums, operators));
  } else if (operators.includes("/")) {
    let oprIdx = operators.indexOf("/");
    let result = parseFloat(nums[oprIdx]) / parseFloat(nums[oprIdx + 1])
    nums.splice(oprIdx, 2, result.toString());
    operators.splice(oprIdx, 1);
    return this.evalEMDAS(this.merge(nums, operators));
  } else if (operators.includes("+")) {
    let oprIdx = operators.indexOf("+");
    let result = parseFloat(nums[oprIdx]) + parseFloat(nums[oprIdx + 1])
    nums.splice(oprIdx, 2, result.toString());
    operators.splice(oprIdx, 1);
    return this.evalEMDAS(this.merge(nums, operators));
  } else if (operators.includes("-")) {
    let oprIdx = operators.indexOf("-");
    let result = parseFloat(nums[oprIdx]) - parseFloat(nums[oprIdx + 1])
    nums.splice(oprIdx, 2, result.toString());
    operators.splice(oprIdx, 1);
    return this.evalEMDAS(this.merge(nums, operators));
  }

}
  reduceParens(expr) {
    let closingIdx = expr.indexOf(")")
    let openingIdx = closingIdx - 1;

    while (expr[openingIdx] !== "(") {
      openingIdx--;
    }

    // Evaluate the expression within the parentheses
    let simplified = this.evalEMDAS(expr.slice(openingIdx + 1, closingIdx));

    // Return the original expression with one set of parentheses simplified
    return expr.slice(0, openingIdx) + simplified + expr.slice(closingIdx + 1);
  }

  reduceExpression(expr) {

    // First, we want to evaluate all sets of parentheses, one set at a time
    // debugger 
    while (expr.includes(")")) {
      expr = this.reduceParens(expr);
    }

    // After parentheses are evaluated, the remaining expression is
    // straightforward to evaluate with another helper 
    return this.evalEMDAS(expr);
  }

// This helper  merges nums and operators arrays into a new expression
// e.g. if num === ['1.0', '3'] and operators === ['/'], then the new expression
// will be '1.0/3'
 merge(nums, operators) {
  let i = 0;

  // Initialize new string, result, with first num
  let result = nums[0];

  // If there are operators to join, use string concatenation to add
  // the operators and following nums
  if (operators.length > 0) {
    while (i !== nums.length - 1) {
      result += operators[i] + nums[i + 1];
      i++;
    }
  }

  return result;
}

// This helper  converts operator strings into mathematical operators
// Not used currently, but could be helpful to DRY up code
//  operate(num1, num2, operator) {
//     switch (operator) {
//         case '*': return num1 * num2;
//         case '/': return num1 / num2;
//         case '+': return num1 + num2;
//         case '-': return num1 - num2;
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
                <Submit handleClick={this.reduceExpression}>=</Submit>
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
