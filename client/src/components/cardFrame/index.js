import React, {useState} from "react";
import "./style.css";

import CardRender from "../cardRender";
import CardCategory from "../cardCategory";

const exampleCards = [
    {
        title: "html acronym",
        q: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
      },
      {
        title: "css acronym",
        q: "What does CSS stand for?",
        a: "Cascading Style Sheet",
      }
]

const exampleCategories = [
  {
    name: "HTML",
    cards:[
      {
          title: "html acronym",
          q: "What does HTML stand for?",
          a: "Hyper Text Markup Language",
        },
        {
          title: "css acronym",
          q: "What does CSS stand for?",
          a: "Cascading Style Sheet",
        }
  ]
  },
  {
    name: "Broken",
    cards:[
      {
          title: "html acronym",
          q: "BROKE",
          a: "BRAKEN",
        },
        {
          title: "css acronym",
          q: "BREAKED",
          a: "BRUNK",
        }
  ]
  }
]




function CardFrame(props)
{
  //change this to an object? One key for deck, one for card. Probably need to spread to update count.
  const [card, setCard] = useState(-1);
  const cardMax = exampleCards.length - 1;
  
  // useEffect(() =>{
  //   console.log(exampleCards.length)
  //   //Do the changes you need.
  // })

  if ( card <= cardMax && card >= 0){
    return(
        <div>
        <div>
        <CardRender front={exampleCards[card].q} back={exampleCards[card].a} />
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
  // Render the card picking menu here.

  return(
    <>
    <div>
    {exampleCategories.map(category => (
      <CardCategory
        name={category.name}
        startDeck={startDeck}
      />
      ))}
      </div>
      </>
  );
}

//This should get passed to and called by the cardCategories component, and should bring up a deck for use.
function startDeck(deckName){
  console.log("Starting a deck:", deckName);
  setCard(0);
}
}


export default CardFrame;