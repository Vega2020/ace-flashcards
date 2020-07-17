import React from "react";
import "./style.css";


const cardCategory = (props) => {
  return (
    <div>
        <button onClick={() => props.startDeck(props.name)}>
  {props.name}
</button>
    </div>
  );
};

export default cardCategory;
