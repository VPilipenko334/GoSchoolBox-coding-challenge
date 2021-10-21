import "./result.css"

const Result = ({result, input}) => {
    return (
        <div className="results-wrapper">
            <div className="result">
                <h2>{result}</h2>

                <div className="input-wrapper">
                    <h3>{input}</h3>
                </div>

            </div>
        </div>
    )
}

export default Result; 