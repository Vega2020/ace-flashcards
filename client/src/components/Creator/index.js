import React, { Component } from 'react';
import axios from 'axios';
import "./style.css"
import { Navbar,  Nav } from "react-bootstrap";
import app from "../../firebase";
import { Form } from "react-bootstrap";


export default class Creator extends Component {

    constructor(props) {
        super(props)

        this.onChangeCardQ = this.onChangeCardQ.bind(this);
        this.onChangeCardA = this.onChangeCardA.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tags: "user-created",
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
        axios.post("/create", userObject);

        //Make sure routes aren't being duplicated (e.g. two "/submit" routes in different files will cause a problem when the browser tries to load both.)

        this.setState({ q: '', a: '' })
    }

    render() {
        return (
            <>
            <Navbar className="bg-dark" variant="dark">
        <Navbar.Brand href="/home">Ace</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/quiz">Quiz Me</Nav.Link>
          <Nav.Link href="/creator">Card Creator</Nav.Link>
          <Nav.Link onClick={() => app.auth().signOut()}>Sign out</Nav.Link>
        </Nav>
        
      </Navbar>   
            <div className="bgImg text-center">
            <div className="bg-dark rounded p-3 formContainer">
                <Form className="text-center" onSubmit={this.onSubmit}>
                    <div className="form-group formContainer">
                        <label className="text-light">Enter question</label>
                        <input type="text" value={this.state.q} onChange={this.onChangeCardQ} className="form-control" />
                    </div>
                    <div className="form-group formContainer">
                        <label className="text-light">Enter answer</label>
                        <input type="text" value={this.state.a} onChange={this.onChangeCardA} className="form-control" />
                    </div>
                    <div className="form-group formContainer">
                        <input type="submit" value="Create Card" className="btn btn-success btn-block" />
                    </div>
                </Form>
            </div>
            </div>
            </>
        )
    }
}