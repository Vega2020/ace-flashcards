// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// function seedCards(req, res) {
//     const cards = [
//         { q: "Flibber jib flip flap?", a: "wokka wokka" },
//         { q: "Hubba dubba shoop shoop?", a: "flingelheimer Morgendorf"}
//     ];

//     for (card of cards) {
//         var newCard = new Card(card);
//         newCard.save();
//     }

//     res.send('Database seeded!');
// }

// module.exports = User;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: String,
  q: String,
  a: String,
});

module.exports = mongoose.model("Card", CardSchema);


//all the seed is is an insert function repeated with a for loop. make a matrix like the one below with a for loop and run it wherever. You can add the code below to package.json to make this run when the server initializes.

const data = [
    {},
    {},
    {},
]

for(let i = 0; i < data.length; i++) {
    this.db.Card.insert(data[i]);
}

// add
// "seed": "node db/seeds/js",
// "prestart": "yarn seed",
// to package.json