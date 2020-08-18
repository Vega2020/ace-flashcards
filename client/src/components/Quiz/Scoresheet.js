import React, {useState} from 'react'
import './style.css'
import { Button } from 'react-bootstrap';
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
        <div className="bgImg text-center">
            <div className="bg-dark rounded p-3 formContainer">
                <div className="">
                    <h1 className="text-center text-light">Quiz Successfully Completed</h1><br />
                    <h3 className="text-center text-light">Your score is {props.score}</h3>
                    {/* <h4 className="text-center text-light">That is {props.score / props.totalQuestions * 100}% </h4> */}
                </div>                
                <Button variant="secondary" className="retakeButton" onClick={() => setRestart(true)}>Restart Quiz</Button>    
                <Button variant="secondary" onClick={() => setGoHome(true)}>Exit</Button>     
            </div>
            </div>
    )
}

export default Scoresheet