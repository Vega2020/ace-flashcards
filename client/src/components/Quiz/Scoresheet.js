import React, {useState} from 'react'
import './style.css'
import Start from './Start'
import Quiz from './Quiz'


function Scoresheet(props) {
    const [goHome, setGoHome] = useState(false) //Hook to check if Exit button was clicked
    const [restart, setRestart] = useState(false) //Hook to check if Restart button was clicked

    //Go Home was clicked, so load the Start Component (don't pass the username along)
    if(goHome === true){
        return (
        <div>
            <Start></Start>
        </div>
        )
    }
    //Restart was clicked so load the Quiz component (pass the username along)
    if(restart === true){
        return (
        <div>
        <Quiz username={props.username}></Quiz>
         </div> 
        )
    }
    return (
        <div>
            <div className="container small">
                <div className="scoresheet">
                    <h1>Quiz Successfully Completed</h1><br />
                    <h3>Your score is {props.score}</h3>
                    <h4>That is {props.score / props.totalQuestions * 100}% </h4>
                </div>                
                <button className="retakeButton" onClick={() => setRestart(true)}>Restart Quiz</button>    
                <button onClick={() => setGoHome(true)}>Exit Quiz</button>     
            </div>
        </div>
    )
}

export default Scoresheet