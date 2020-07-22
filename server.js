const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

// These have to be called in above the routes! What these do is look at the data coming in and parse it out. If the route hits before the parse happens, it returns as undefined.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://project3DB:password2020@ds259586.mlab.com:59586/heroku_hxxsxbvc";

// Mongoose.connect(MONGODB_URI);

// import the routes file:
app.use(require("./routes/routes"));

// require mongoose connection
require("./db");

app.use(logger("dev"));


app.use(express.static("public"));

// TODO - All routes refering to db will break - need to fix
let db = require('./db/index');
const { Mongoose } = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// All of these calls/routes need to be moved to the routes file and refactored into mongoose format from mongojs

app.get("/find/:id", (req, res) => {
  db.htmlCards.findOne(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

// This looks like the post method to submit user created cards - it just needs to be connected to our mongo database correctly and then have a cutton to trigger it. This will all be part of the Creator component.
app.post("/update/:id", (req, res) => {
  db.cards.update(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    {
      $set: {
        q: req.body.q,
        a: req.body.a,
        modified: Date.now(),
      },
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  db.htmlCards.remove(
    {
      _id: mongojs.ObjectID(req.params.id),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/clearall", (req, res) => {
  db.htmlCards.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
