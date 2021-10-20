import Result from "./result";

function App() {

  const allDigits = () => {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(
        <button key={i}>{i}</button>
      )
    }

    return array; 
  }

  return (
      <div className="App">
        <div className="calculator-wrapper">
            <div className="result">
              < Result />
          </div>
         
          <div className="numbers">
            <button>{allDigits()}</button>
          </div>

          <div className="basic-operators">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
          </div>

          <div className="advanced-operators">
            <button>.</button>
            <button>=</button>
            <button>CLEAR</button>
            
          </div>

        </div>
      </div>
  );
}

export default App;
