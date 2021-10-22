import React from "react";
import Button from "./components/button";
import BackButton from "./components/back_button";
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
      num1: "",
      num2: "",
      operation: "",
      result: ""
    };
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : ""
    this.setState( { num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : ""
    this.setState( { num2 })
  }


  updateValues = (value) => {
    this.setState({ input: this.state.input + value });
  }
  
  allClear = (e) => {
    e.preventDefault();
    this.setState({
      input: "",
      num1: "",
      num2: "",
      result: ""
    })
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
                <BackButton handleClick={this.goBack}>BK</BackButton>
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
