import React, { Component } from 'react'
import QuestionManager from './QuestionManager'
import Quiz from './Quiz'
import Start from './Start'
import { Navbar,  Nav, Button } from "react-bootstrap";
import app from "../../firebase";
//import QuizData from './QuizData'
import axios from 'axios';



export class Game extends Component {

    constructor(props) {
        super(props)   
        this.state = {
             numberOfQuestions:0,        //Number of question in the database
             gotoQuestionManager: false, //If user clicked on Question Manager button
             gotoQuiz: false,            //If user clicked on Start Quiz Button
             username: '',               //Username, set by props from Start component
             goBack: false               // if user clicked on exit button
        }
        this.manageQuestions = this.manageQuestions.bind(this)
        this.startQuiz = this.startQuiz.bind(this)
    }

    //Query the database to count the number of questions available
    componentDidMount(){
        axios.get("/Quiz");

        // let count = 0;
        // aceCardsDB.questions.each((item) => count = count+1)
        // .then(() => {
        //     this.setState({numberOfQuestions: count})
        // });
        // this.setState({
        //     username: this.props.username
        // })
    }

    //User clicked on Question Manager button
    manageQuestions(){       
        this.setState({
            gotoQuestionManager: true
        })
    }

    //USer clicked on STart Quiz button
    startQuiz(){
        if(this.state.numberOfQuestions === 0){
            alert("You must add at least one question before you can start the quiz") //a little validation
        }
        else{
          this.setState({
              gotoQuiz: true
          });
          axios.get("/Quiz");
        }
    }

    render() {
        if(this.state.gotoQuestionManager === true){
            return (
                <div>
                    <QuestionManager username={this.state.username}></QuestionManager>
                </div>
            )
        }
        else if(this.state.gotoQuiz === true){
            return (
                <div>
                    <Quiz username={this.state.username}></Quiz>
                </div>
            )
        }
        else if(this.state.goBack ===true){
            return(
                <div>
                    <Start></Start>
                </div>
            )
        }

        return (
            <>
            <Navbar className="bg-dark" variant="dark">
        <Navbar.Brand href="/home">Ace</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/quiz">Quiz Me</Nav.Link>
          <Nav.Link href="/creator">Card Creator</Nav.Link>
          <Nav.Link onClick={() => app.auth().signOut()}>Sign out</Nav.Link>
        </Nav>

      </Navbar>  
            <div className="bgImg text-center">
                <div className="bg-dark rounded p-3 formContainer text-center text-light">
                    <hr />
                    <center>
                        <h1 className="text-center text-light">Quiz Dashboard</h1>
                        <h4  className="text-center text-light">Number of questions in the database must be one or more before you can starte the quiz</h4>
                        <h5  className="text-center text-light">To add a question, please click on the Manage Questions button</h5>
                    </center>
                    <hr />
                    Number of Question: {this.state.numberOfQuestions}<br />
                    <Button  size="lg" className="text-light m-5" variant="secondary" onClick={this.manageQuestions}>Manage Questions</Button>
                    <Button  variant="secondary" className="button green" onClick={this.startQuiz}>Start Quiz</Button> <br />
                    <Button  variant="secondary" onClick={()=>{this.setState({username:'', goBack:true})}}>Exit</Button>
                </div>
            </div>
            </>
        )
    }
}

export default Game