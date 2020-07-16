import React from "react";
//import "./style.css";

import Card from "../card/card.js";


let question = "Hello"
let answer = "Yes, hello."

function cardFrame(props)
{
    return(
        <div>
        <div>
        <Card question={question} answer={answer} />
        </div>
        <div>
        <button onclick={nextCard}>Get the next one</button>
        </div>
        </div>
    )
}

function nextCard(props){
}

export default cardFrame;