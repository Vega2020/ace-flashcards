import React, { useState, useEffect } from "react";
import uniq from "lodash/uniq";
import Axios from "axios";

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
      console.log(data);
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
      <div>
        <div>
          <CardRender front={cards[cardIndex].q} back={cards[cardIndex].a} />
        </div>
        <div>
          <button className="bg-dark text-light" onClick={() => setCardIndex(cardIndex - 1)}>Prev</button>
        </div>
        <div>
          <button className="bg-dark text-light" onClick={() => setCardIndex(cardIndex + 1)}>Next</button>
        </div>
      </div>
    );
  } else {
    // If the card count is outside the deck range, we either haven't picked a deck yet, or have navigated past the end.
    //As such, render the menu.

    //Since sets don't allow duplicate entries, feeding the tag of each item into a set gives us a list of tags.
    let arrayOfTags = uniq(cards.map((category) => category.tags));
    //Then we need to have it return a button for each category.
    return (
      <>
        <div className="bg-dark">
          {arrayOfTags.map((category) => (
            <CardCategory name={category} startDeck={startDeck} />
          ))}
        </div>
      </>
    );
  }

  //This should get passed to and called by the cardCategories component, and should bring up a deck for use.
  function startDeck(deckName) {
    console.log("Starting a deck:", deckName);
    setCardIndex(0);
    setDeck(deckName);
    console.log("Deck is now:");
    console.log(deck);
  }
}

export default CardFrame;
