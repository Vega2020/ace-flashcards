import React from "react";
import { Button } from "react-bootstrap";

import "./style.css";


const cardCategory = (props) => {
  console.log(props);
  return (
    <div className="text-center">
    <div className="bg-dark rounded p-3 formContainer">
        <Button variant="secondary" onClick={() => props.startDeck(props.name)}>
  {props.name}
</Button>
    </div>
    </div>
  );
};

export default cardCategory;
