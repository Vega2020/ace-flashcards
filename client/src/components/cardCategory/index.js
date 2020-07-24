import React from "react";
import { Button } from "react-bootstrap";

import "./style.css";


const cardCategory = (props) => {
  return (
    <>
        <Button className="capitalize" variant="secondary" onClick={() => props.startDeck(props.name)}>
  {props.name}
</Button>
    </>
  );
};

export default cardCategory;
