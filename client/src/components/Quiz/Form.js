import React, { Component } from 'react'
import { uuid } from 'uuidv4';
import './style.css'
import QuizData from './QuizData'


export class Form extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             question: '',
             option1: '',
             option2: '',
             option3: '',
             option4: '',
             answer: ''        }
    }

    //Controlled form elements with React
    handleChange = (event) => {
        var inputName = event.target.name;
        if(inputName === 'txtQuestion'){
            this.setState({question: event.target.value})
        }
        else if(inputName === 'txtOption1') {
            this.setState({option1: event.target.value})
        }
        else if(inputName === 'txtOption2') {
            this.setState({option2: event.target.value})
        }
        else if(inputName === 'txtOption3') {
            this.setState({option3: event.target.value})
        }
        else if(inputName === 'txtOption4') {
            this.setState({option4: event.target.value})
        }
        else if(inputName === 'txtAnswer') {
            this.setState({answer: event.target.value})
        }
    }

    //Insert data into IndexedDB
    insertData = (event) => {
        const {question, option1, option2, option3, option4, answer} = this.state
        event.preventDefault()
         //Quick and dirty Required field validation. 
        if (question.length < 1 
            || option1.length < 1 
            || option2.length < 1 
            || option3.length < 1 
            || option4.length < 1 
            || answer.length < 1
            ) {
            alert("Check that no textfield is empty")
        }
        //Also answer must be one of the options
        else if( option1 !== answer 
            && option2 !== answer
            && option3 !== answer
            && option4 !== answer
        ){
            alert("The answer must be one of the options")
        }
        else {
            //Actually Insert the data into the database
            QuizData.questions.put({
                id: uuid(),
                question: this.state.question, 
                option1: this.state.option1,
                option2: this.state.option2,
                option3: this.state.option3,
                option4: this.state.option4,
                answer: this.state.answer
            })
            .then(()=> {  
                //Clear the textfields after insertion
                this.setState({
                    question: '',
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    answer: ''
                })  
            })
        }
  };

    render() {
        return (           
              <form>
                <label>Enter Question: </label>
                <input ref="q" name="txtQuestion" onChange={this.handleChange} type="text" value={this.state.question} size="70"></input>
                <hr />
                Answer Options
                <p>
                    <label>Option 1: </label>
                    <input ref="o1" name="txtOption1" onChange={this.handleChange} type="text" value={this.state.option1}></input>
                </p>
                <p>
                    <label>Option 2: </label>
                    <input ref="o2" name="txtOption2" onChange={this.handleChange} type="text" value={this.state.option2}></input>
                </p>
                <p>
                    <label>Option 3: </label>
                    <input ref="o3" name="txtOption3" onChange={this.handleChange} type="text" value={this.state.option3}></input>
                </p>
                <p>
                    <label>Option 4: </label>
                    <input ref="o4" name="txtOption4" onChange={this.handleChange} type="text" value={this.state.option4}></input>
                </p>  
                <hr />
                <p>
                    <label>Answer: </label>
                    <input name="txtAnswer" onChange={this.handleChange} type="text" value={this.state.answer}></input>
                </p>  
                <hr />                              
                    <input type="submit" className="button" value="Submit Question" onClick={this.insertData} ></input>                
            </form>
        )
    }
}

export default Form