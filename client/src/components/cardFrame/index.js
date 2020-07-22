import React, { useState, useEffect } from "react";
import uniq from "lodash/uniq";
import Axios from "axios";
import { Button } from "react-bootstrap";
import "./style.css";
import CardRender from "../cardRender";
import CardCategory from "../cardCategory";

// import axios from "axios";
// const axiosCall = axios.get("/all");
// console.log(axiosCall);
// adding these lines and then changing all instances of "cards" to "axiosCall" was my first attempt - didn't compile that way.

function CardFrame(props) {
  //One state for deck, one for the tag to be filtered for.
  const [cardIndex, setCardIndex] = useState(-1);
  const [deck, setDeck] = useState("Broken");
  const [cards, setCards] = useState([]);

  // componentDidMount()
  // TLDR; when the component is rendered on the page
  useEffect(() => {
    Axios.get("/all").then(function ({ data }) {
      setCards(data);
    });
  }, []);

  //Filter to pick out and set a working deck by tag.
  const cardSet = cards.filter((cardToCheck) => {
    return cardToCheck.tags === deck;
  });

  //Little variable to measure the resulting array length, to prevent overshooting.
  const cardMax = cardSet.length - 1;
  //This checks to see if the card count is within the range of the deck. If it is, we render the card and navigation.
  if (cardIndex <= cardMax && cardIndex >= 0) {
    return (
      <div className="bgImg text-center">
        <div>
          <CardRender front={cardSet[cardIndex].q} back={cardSet[cardIndex].a} />
        </div>
        <div>
          <Button className="bg-dark text-light" onClick={() => setCardIndex(cardIndex - 1)}>Prev</Button>
        </div>
        <div>
          <Button className="bg-dark text-light" onClick={() => setCardIndex(cardIndex + 1)}>Next</Button>
        </div>
      </div>
    );
  } else {
    // If the card count is outside the deck range, we either haven't picked a deck yet, or have navigated past the end.
    //As such, render the menu.

    //Since sets don't allow duplicate entries, feeding the tag of each item into a set gives us a list of tags.
    let arrayOfTags = uniq(cards.map((category) => category.tags));
    console.log(arrayOfTags);
    //Then we need to have it return a button for each category.
    return (
      <>
        <div className="bg-dark bgImg text-center">
          <div className="bg-dark rounded p-3 formContainer">
          {arrayOfTags.map((category) => (
            <CardCategory name={category} startDeck={startDeck} />
          ))}
        </div>
        </div>
      </>
    );
  }

  //This should get passed to and called by the cardCategories component, and should bring up a deck for use.
  function startDeck(deckName) {
    console.log("Starting a deck:", deckName);
    setCardIndex(0);
    setDeck(deckName);
    console.log("Deck set");
  }
}

export default CardFrame;
