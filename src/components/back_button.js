import React from "react";

class BackButton extends React.Component {
    render() {
        return(
            <div onClick={() => this.props.goBack()}> 
                <button className="back-button">{this.props.children}</button>
            </div>
        )
    }
}

export default BackButton; 