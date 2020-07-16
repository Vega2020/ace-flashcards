import React, {useState, useEffect} from "react";
//import "./style.css";

import CardRender from "../cardRender";

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




function CardFrame(props)
{
  const [card, setCard] = useState(0);
  const cardMax = exampleCards.length - 1;
  
  // useEffect(() =>{
  //   console.log(exampleCards.length)
  //   //Do the changes you need.
  // })

  if ( card <= cardMax){
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
console.log("It's the end!");
}
return(null);
}


export default CardFrame;