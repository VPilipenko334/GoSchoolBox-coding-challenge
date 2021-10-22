import React from "react";

class Result extends React.Component {

    render() {
        return (
            <div className="results-wrapper">
                <div className="result">
                    <h2>{this.props.children}</h2>
                </div>
            </div>
        )
    }
    
    
}

export default Result; 