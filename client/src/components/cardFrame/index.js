import React, {useState} from "react";
import "./style.css";

import CardRender from "../cardRender";
import CardCategory from "../cardCategory";

const exampleCardSet = [
    {
        title: "html acronym",
        q: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        tag: "HTML"
      },
      {
        title: "css acronym",
        q: "What does CSS stand for?",
        a: "Cascading Style Sheet",
        tag: "HTML"
      },
      {
        title: "bork acronym",
        q: "What does bork stand for?",
        a: "Hyper Text bork Language",
        tag: "Broken"
      },
      {
        title: "css acronym",
        q: "What does broke stand for?",
        a: "Cascading broke Sheet",
        tag: "Broken"
      },
]




function CardFrame(props)
{
  //One state for deck, one for the tag to be filtered for.
  const [card, setCard] = useState(-1);
  const [deck, setDeck] = useState("Broken");

  //Filter to pick out and set a working deck by tag.
  const cardSet = exampleCardSet.filter((cardToCheck) => {
    return cardToCheck.tag === deck;
  });

  //Little variable to measure the resulting array length, to prevent overshooting.
  const cardMax = cardSet.length - 1;

  
  //This checks to see if the card count is within the range of the deck. If it is, we render the card and navigation.
  if ( card <= cardMax && card >= 0){
    return(
        <div>
        <div>
        <CardRender front={exampleCardSet[card].q} back={exampleCardSet[card].a} />
        </div>
        <div>
        <button onClick={() => setCard(card - 1)}>Prev</button>
        </div>
        <div>
        <button onClick={() => setCard(card + 1)}>Next</button>
        </div>
        </div>
    )
}
else{
  // If the card count is outside the deck range, we either haven't picked a deck yet, or have navigated past the end.
  //As such, render the menu.

  //Since sets don't allow duplicate entries, feeding the tag of each item into a set gives us a list of tags.
  let setOfTags = new Set(exampleCardSet.map(category => (category.tag)));
  //We turn it back into an array, so we can iterate over it more easily.
  let arrayOfTags = Array.from(setOfTags);
  //Then we need to have it return a button for each category.
  return(
    <>
    <div>
      {
        arrayOfTags.map(category => (
          <CardCategory
            name={category}
            startDeck={startDeck}
          />
          ))
      }
      </div>
      </>
  );
}

//This should get passed to and called by the cardCategories component, and should bring up a deck for use.
function startDeck(deckName){
  console.log("Starting a deck:", deckName);
  setCard(0);
  setDeck(deckName);
  console.log("Deck is now:");
  console.log(deck);
}
}


export default CardFrame;