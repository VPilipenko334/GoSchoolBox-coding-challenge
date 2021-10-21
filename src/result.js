import React from "react";
import "./result.css"

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results-wrapper">
                <div className="result">
                    <h2>{this.props.result}</h2>

                    <div className="input-wrapper">
                        <h3>{this.props.input}</h3>
                    </div>

                </div>
            </div>
        )
    }
    
    
}

export default Result; 