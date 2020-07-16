import React from "react";
import "./style.css";


function card(props) {
  return (
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h1>{props.question}</h1>
      </div>
      <div class="flip-card-back">
        <h1>Hi</h1>
        <p>{props.answer}</p>
      </div>
    </div>
  </div>
  );
}

function flipCard(props)
{
    return(
        console.log("")
    )
}

export default card;