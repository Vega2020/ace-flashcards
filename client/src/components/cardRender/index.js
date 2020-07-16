import React from "react";
import app from "../../firebase";
import "./style.css";

const cardRender = (props) => {
  return (
    <div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h1>Hi</h1>
          </div>
          <div class="flip-card-back">
            <h1>Bye</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardRender;
