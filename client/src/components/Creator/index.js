import React, { Component } from 'react';
import axios from 'axios';

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

        //send to routes file here?

        //Make sure routes aren't being duplicated (e.g. two "/submit" routes in different files will cause a problem when the browser tries to load both.)

        this.setState({ tag: '', q: '', a: '' })
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter question</label>
                        <input type="text" value={this.state.q} onChange={this.onChangeCardQ} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter answer</label>
                        <input type="text" value={this.state.a} onChange={this.onChangeCardA} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Card" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}