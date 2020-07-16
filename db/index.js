const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/aceCardsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
