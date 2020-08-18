const db = require("../models");
const data = require("./data");
const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/aceCardsDB"
);

// require mongoose connection
require("./index");

(async () => {try{
  // await db.Card.deleteMany({});

  const cards = await db.Card.insertMany(data);

  console.log(`${cards.length} items inserted into Cards Document`);
  process.exit();
}catch(err){
  console.log(err);
}})();
