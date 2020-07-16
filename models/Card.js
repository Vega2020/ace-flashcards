const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a mongoose schema for our card
const CardSchema = new Schema({
  tags: [],
  q: String,
  a: String,
});

module.exports = mongoose.model("Card", CardSchema);
