import React, { Component } from "react";
import ".style.css";

class Cardmaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            q: "Question goes here",
            a: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('question submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Question:
                <textarea value={this.state.value} onChange= {this.handleChange} />
            </label>
            <input className="secondary" type="submit" value="Submit" />
            </form>
        );
    }
}

export default Cardmaker;