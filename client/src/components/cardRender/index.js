import React from "react";
import "./style.css";


const cardRender = (props) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{props.front}</h1>
            <div>
        <button onClick={() => console.log("Flippy")}>Prev</button>
        </div>
          </div>
          <div className="flip-card-back">
            <h1>{props.back}</h1>
            <div>
        <button onClick={() => console.log("Flippy")}>Prev</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardRender;
