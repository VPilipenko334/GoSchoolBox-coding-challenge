import React from "react";
import "./result.css"

class Result extends React.Component {

    render() {
        return (
            <div className="results-wrapper">
                <div className="result">
                    <h2>{this.props.result}</h2>
                </div>
            </div>
        )
    }
    
    
}

export default Result; 