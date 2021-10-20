import React from "react";
import "./result.css"

class Result extends React.Component {
    constructor (props) {
        super(props);

    }

    render() {
        return (
            <div className="results-wrapper">
                <div className="result">
                    <h2>Result will go here</h2>
    
    
                    <div className="input-wrapper">
                        <h3>input will go here</h3>
                    </div>
    
                </div>
            </div>
        )
    }

}

export default Result; 