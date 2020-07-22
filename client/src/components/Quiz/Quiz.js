import React, { Component } from "react";
import { Navbar,  Nav, Button } from "react-bootstrap";
import app from "../../firebase";
import Scoresheet from "./Scoresheet";

import "./style.css";

export class Quiz extends Component {

  constructor(props) {
      super(props)   
      this.state = {
          questionBank: [],
          currentIndex: 0,
          userAnswer: null,
          score:0,
          disabled: true, //Enable or disable Next Button
          disabledOptions: false, //Enable or disable Answer Options
          option1: false, //Radio button all initially not checked, so set to false initially
          option2: false,
          option3: false,
          option4: false,
          endQuiz: false, //Checks if the quiz have ended (Current index gotten to the last)
          disabledCheck:true //Enable or disable Check Answer button
      }

      //Bind this keyword
      this.checkAnswer = this.checkAnswer.bind(this)
      this.answerIsCorrect = this.answerIsCorrect.bind(this)
  }
  
  //Reads the question from IndexedDB and loads them into the questionBank
//   loadQuestions = () => {
//       let arr = [];
//       db.quizQuestions.each((item) => arr.push(item))
//       .then(() => this.setState({questionBank: arr}));
//   }

  //Load the question from indexedDB when component mounts
//   componentDidMount(){
//       this.loadQuestions()
      
//   }

  //Increment the currentIndex when next button is clicked
  nextQuestionHander = () => {
      this.setState({
          currentIndex:  this.state.currentIndex + 1,
          disabled:true,
          disabledOptions: false,
          disabledCheck: true,
          option1: false,
          option2: false,
          option3: false,
          option4: false,
          correctAnswer: '',
          userAnswer: ''
      })
  }

  //Check if UserAnswer is correct 
  answerIsCorrect(userAnswer){
      const {currentIndex, questionBank} = this.state
      if(userAnswer === questionBank[currentIndex].answer) {
          return true
      } else {return false}
  }

  //Increment score if answer is correct and enable Next Button
  checkAnswer = () =>{
      const {score, userAnswer, questionBank, currentIndex} = this.state
          if(this.answerIsCorrect(userAnswer)){
              this.setState({
                  score: score + 1
              })
          }
          this.setState({
              disabledOptions:true,
              disabled: false,
              correctAnswer: questionBank[currentIndex].answer
          })
  }
  
  //Set the User answer depending on which option the user clicked
  setUserAnswer = (event) => {
      if(event.target.id === "o1") { 
          this.setState({option1: event.target.checked, userAnswer: event.target.value })       
      }
      else if(event.target.id ==="o2") {
          this.setState({option2: event.target.checked, userAnswer: event.target.value })
      }
      else if(event.target.id ==="o3") {
          this.setState({option3: event.target.checked, userAnswer: event.target.value })
      }
      else if(event.target.id ==="o4") {
          this.setState({option4: event.target.checked, userAnswer: event.target.value })
      }
      this.setState({disabledCheck:false})
  }

  render() {   
      const {currentIndex,  endQuiz, questionBank, score, userAnswer, correctAnswer} = this.state
      var currentQuestion = questionBank[currentIndex]  
      
      

      if((currentIndex <= questionBank.length -1) && (endQuiz === false)) 
      {
        return (
        <>    
                {/* Navbar Component */}
                <Navbar className="bg-dark" variant="dark">
                    <Navbar.Brand href="/">Ace</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/quiz">Quiz Me</Nav.Link>
                        <Nav.Link href="/creator">Card Creator</Nav.Link>
                        <Nav.Link onClick={() => app.auth().signOut()}>Sign out</Nav.Link>
                    </Nav>
                </Navbar>
                {/*End of NavBar component */} 

            <div className="container">                    
                <h2> {currentQuestion.question}</h2>
                <h4>Question {currentIndex + 1} of {questionBank.length} </h4>
                <fieldset disabled={this.state.disabledOptions}>
                    
                    <div className="options">
                        <input id="o1" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option1}  checked={this.state.option1}/> {currentQuestion.option1}
                    </div>
                    
                    <div className="options">
                        <input id="o2" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option2} checked={this.state.option2}/> {currentQuestion.option2}
                    </div>
                    
                    <div className="options">
                        <input id="o3" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option3} checked={this.state.option3}/> {currentQuestion.option3}
                    </div>
                    
                    <div className="options">
                        <input id="o4" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option4} checked={this.state.option4}/> {currentQuestion.option4}
                    </div>

                </fieldset> 

                <div>
                    <button onClick={this.checkAnswer} disabled={this.state.disabledCheck}>Check Answer</button>   
                    <span>Your answer: {userAnswer} </span>
                    <span>   Correct answer: {correctAnswer}</span>
                </div>
                
                <button className="button" onClick={this.nextQuestionHander} disabled = {this.state.disabled}>Next</button>                          
            </div >
            
            <div> 
                <center>
                    <button onClick={()=>{this.setState({endQuiz:true})}} >End Quiz Now</button>
                </center>
                <br>
                </br>
            </div>
        </>
        );
    }
    else 
    { //Quiz has ended so now load the Scoresheet component
        return (
        <>    
        <Navbar className="bg-dark" variant="dark">
                    <Navbar.Brand href="/">Ace</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/quiz">Quiz Me</Nav.Link>
                        <Nav.Link href="/creator">Card Creator</Nav.Link>
                        <Nav.Link onClick={() => app.auth().signOut()}>Sign out</Nav.Link>
                    </Nav>
                </Navbar> 

              <div >
                  <Scoresheet username={this.props.username} score={score} totalQuestions={questionBank.length} />
                  <br />               
              </div>
        </>
          )
      }
  }
}

export default Quiz;