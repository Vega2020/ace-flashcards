import React from "react";
import "./style.css";


const cardRender = (props) => {
  return (
    <div className="formContainer">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-dark">
            <h1 className="text-light">{props.front}</h1>
            <p className="instruction text-light">Click and Hold for Answer</p>
          </div>
          <div className="flip-card-back bg-dark">
            <h1 className="text-light">{props.back}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardRender;
