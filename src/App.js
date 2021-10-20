import Result from "./result";

function App() {
  return (
      <div className="App">
        <div className="calculator-wrapper">
            <div className="result">
              < Result />
          </div>
         
          <div className="numbers">
            <button>0</button>
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
