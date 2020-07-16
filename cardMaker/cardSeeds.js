// First import the NPM packages and Schema method from mongoose:
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const Schema = mongoose.Schema;

// define a database and collections for our db variable:
const databaseUrl = "aceCardsDB";
const collections = ["htmlCards", "cssCards", "javascriptCards", "testCards"];

// pass the database and collection variables into the mongojs method, and declare it as "db".
const db = mongojs(databaseUrl, collections);

// create a mongoose schema for our card
const CardSchema = new Schema({
  title: String,
  q: String,
  a: String,
});

// set a mongoose.model method for Card based on the schema above
const Card = mongoose.model("Card", CardSchema)

// This function will seed our html cards. The matrix of cards will be entered below.
function seedHtmlCards() {

  // first drop the collection so it isn't duplicated
  db.htmlCards.drop();
  console.log("html card collection dropped");
  
  // HTML cards go here. You can copy and paste the object below to add as many cards as you want. The "title" field is a good place for keywords that will help make the questions searchable - it's more like a series of tags than a name.
  const data = [
    { title: "html acronym", q: "What does HTML stand for?", a: "Hyper Text Markup Language." },
    // copy the format above to enter more questions.
    { title: "", q: "", a: ""},
    { title: "", q: "", a: ""},
  ]
  
  // this for loop will insert each of the objects above into our mongo database.
  for(let i = 0; i < data.length; i++) {
    db.htmlCards.insert(data[i]);
      console.log("html question " + [i] + " inserted");
    }
  
  }

// Now we repeat the process for CSS cards and so on through the categories.
function seedCssCards() {
  
  db.cssCards.drop();
  console.log("css collection dropped");
  
  const data = [
    { title: "", q: "", a: ""},
    { title: "", q: "", a: ""},
    { title: "", q: "", a: ""},
  ]
  
  for(let i = 0; i < data.length; i++) {
    db.cssCards.insert(data[i]);
    console.log("css question " + [i] + " inserted");
  }
  
}

function seedJavascriptCards() {
  
  db.javascriptCards.drop();
  console.log("css collection dropped");
  
  const data = [
    { title: "", q: "", a: ""},
    { title: "", q: "", a: ""},
    { title: "", q: "", a: ""},
  ]
  
  for(let i = 0; i < data.length; i++) {
    db.javascriptCards.insert(data[i]);
    console.log("javascript question " + [i] + " inserted");
  }
  
}

// Finally, we need to call all the functions we just defined. This is the step that actually populates the mongo database.
seedHtmlCards();
seedCssCards();
seedJavascriptCards();

// we'll also add
// "seed": "node db/seeds/js",
// "prestart": "yarn seed",
// to package.json to have it start at the right time during launch