const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a mongoose schema for our card
const CardSchema = new Schema({
  tags: String,
  q: String,
  a: String,
}, {
  collection: 'cards'
});

module.exports = mongoose.model("Card", CardSchema);
