import React from "react";

class Button extends React.Component {

    render() {
        return (
            <div onClick={() => this.props.handleClick(this.props.children)}>
                <button className="number-button">{this.props.children}</button>
            </div>
        )
    }
}

export default Button; 