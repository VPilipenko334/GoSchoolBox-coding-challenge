import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={() => this.props.handleClick(this.props.children)}>
                <button className="number-button">{this.props.children}</button>
            </div>
        )
    }
}

export default Button; 