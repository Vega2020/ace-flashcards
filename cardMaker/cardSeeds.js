const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongojs = require("mongojs");

const databaseUrl = "aceCardsDB";
const collections = ["htmlCards", "cssCards", "javascriptCards", "testCards"];

const db = mongojs(databaseUrl, collections);

const CardSchema = new Schema({
  title: String,
  q: String,
  a: String,
});

//all the seed needs is an insert function repeated with a for loop. make a matrix like the one below with a for loop and run it wherever. You can add the code below to package.json to make this run when the server initializes.

// add
// "seed": "node db/seeds/js",
// "prestart": "yarn seed",
// to package.json to have it start at the right time during launch

function seedHtmlCards() {

const data = [
    { title: "wooloof", q: "Flibber jib flip flap?", a: "wokka wokka" },
    { title: "hub", q: "Hubba dubba shoop shoop?", a: "flingelheimer Morgendorf"},
    { title: "gree", q: "Greeeeee greeble grupp?", a: "Snooger flop flop hurrah"},
]

for(let i = 0; i < data.length; i++) {
    this.db.testCards.insert(data[i]);
}

//res.send('Database seeded!');

}

function seedCssCards() {

  const data = [
    { title: "", q: "", a: ""},
    { title: "", q: "", a: ""},
    { title: "", q: "", a: ""},
  ]


  for(let i = 0; i < data.length; i++) {
    this.db.cssCards.insert(data[i]);
}

}

module.exports = mongoose.model("Card", CardSchema);

seedHtmlCards();
seedCssCards();