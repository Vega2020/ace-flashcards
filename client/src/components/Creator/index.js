import React, { Component } from 'react';
import axios from 'axios';

// Can't import from outside of src directory! How to get around this?
//import router from '../../../../routes/routes'

export default class Creator extends Component {

    constructor(props) {
        super(props)

        this.onChangeCardQ = this.onChangeCardQ.bind(this);
        this.onChangeCardA = this.onChangeCardA.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tags: '',
            q: '',
            a: ''
        }
    }

    onChangeCardQ(e) {
        this.setState({ q: e.target.value });
        console.log(e.target.value)
    }

    onChangeCardA(e) {
        this.setState({ a: e.target.value });
        console.log(e.target.value)
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            tags: this.state.tags,
            q: this.state.q,
            a: this.state.a
        };

        // this .post probably needs to be routed somewhere else
        axios.post("mongodb://localhost/aceCardsDB", userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ tag: '', q: '', a: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter question</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeCardQ} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter answer</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeCardA} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Card" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}