import React from "react";

class Input extends React.Component {
    render() {
        return (
            <div className="input-wrapper">
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}

export default Input; 