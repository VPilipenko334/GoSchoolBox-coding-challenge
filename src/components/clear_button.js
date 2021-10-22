import React from "react";

class ClearButton extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ClearButton;