import React, { Component } from 'react'
import { Navbar,  Nav, Button } from "react-bootstrap";
import app from "../../firebase";
import Game from './Game'

export class Start extends Component {
    constructor(props) {
        super(props)   
        this.state = {
             username: "",    //Initial value of username
             start: false    //If user can go to dashboard
        }
        this.startGame = this.startGame.bind(this)
    }

    //Update Username when user types in the input field
    setUsername = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    //Check the user has entered a value in the username field
    startGame(){ 
        if(this.state.username !== ""){
            this.setState({
                start: true
            })
        }
    }    

    render() {
        //Load the Game Dashboard component if start is true
        const{start}= this.state
        if(start === true){
            return (
                <div>
                    <Game username={this.state.username}></Game>
                </div>
            )
        }
        
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
             <div className="home bg-dark rounded p-3 text-light">            
                <h1 className="text-light">Welcome to the Quiz</h1><br />
                Enter your username to start <br />
                <input type='text' onChange={this.setUsername} value={this.state.username} />
                <br />
                <Button className="button text-light p-0" variant="secondary" disabled={this.state.username.length < 1} onClick={this.startGame}>Game Dashboard</Button>
            </div>
            </div>
            </div>
            </>
        )
    }
}
export default Start