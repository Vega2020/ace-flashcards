import React, { Component } from 'react'
import Form from './Form'
import Game from './Game.js'
import './style.css'
import QuizData from './QuizData'

export class QuestionManager extends Component {

constructor(props) {
    super(props)

    this.state = {
        questionBank: [],
        cancel: false
    }
}

    //Load the question from IndexedDB
    loadQuestions = () => {
        console.log("This is QuizData", QuizData)
        let questionArray = QuizData.map((entry) => entry.questions);
        this.setState({questionBank: {questionArray}});
        //let arr = [];
        //QuizData.questions.each((item) => arr.push(item))
        //.then(() => this.setState({questionBank: arr}));
    }

    //Function to Delete Question based on the key
    deleteQuestion = (event) => {
        var clickedId = event.target.id; //id of the delete button holds the key for delete operation
        QuizData.questions.delete(clickedId).then(() =>{
            this.loadQuestions();
        });
    }

    render() {
        this.loadQuestions()
        //Display the list of questions
        var list = this.state.questionBank.map(result =>{
            return (
                <div className="questionItem" key={result.id}><span>{result.question}</span><button id={result.id} onClick={this.deleteQuestion}>Delete</button><br /> 
                        A. {result.option1};
                        B. {result.option2};  
                        C. {result.option3};  
                        D. {result.option4}; 
                        <hr />
                </div>
            )
        });
        if(this.state.cancel === true){ //User want to exit the question Manager
            return (
                <Game username={this.props.username}></Game>
            )
        }
        else {
            //Form displays below the list
        return (
            <div> 
                <center><h3>Available Questions</h3></center>           
                {list}
                <center><h3>Enter new question using the form below</h3></center>
                <div className="container small">
                  <Form />
                  <button onClick={() => { this.setState({cancel:true}) }}>Go Back</button>
              </div> 
            </div>
        )
        }
    }
}
export default QuestionManager