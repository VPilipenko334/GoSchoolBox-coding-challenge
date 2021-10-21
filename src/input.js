import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num1: "", num2: ""};
    }

    setNum1(event) {
        const num1 = event.target.value ? parseInt(event.target.value) : "";
        this.setState({ num1 });
    }

    setNum2(event) {
        const num2 = event.target.value ? parseInt(event.target.value) : "";
        this.setState({ num2})
    }

    add(e) {
        e.preventDefault();
        const result = this.state.num1 + this.state.num2;
        this.setState({ result })
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