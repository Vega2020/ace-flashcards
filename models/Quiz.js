const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a mongoose schema for our quiz
const QuizSchema = new Schema({
  tags: String,
  questions: String,
  options: Array,
  answers: String,
}, {
  collection: 'QuizData'
});

module.exports = mongoose.model("Quiz", QuizSchema);