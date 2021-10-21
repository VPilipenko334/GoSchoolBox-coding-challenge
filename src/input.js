import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-wrapper">
                <h3>{this.props.input}</h3>
            </div>
        )
    }
}

export default Input; 