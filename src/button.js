import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        )
    }
}

export default Button; 