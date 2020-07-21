import React, { Component } from 'react'
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
            <div>
            <div className="container">  
             <div className="home">            
                <h1>Welcome to the Quiz</h1><br />
                Enter your username to start <br />
                <input  type='text' onChange={this.setUsername} value={this.state.username} />
                <br />
                <button className="button" disabled={this.state.username.length < 1} onClick={this.startGame}>Game Dashboard</button>
            </div>
            </div>
            </div>
        )
    }
}
export default Start