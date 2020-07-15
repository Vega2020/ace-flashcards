const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "aceCardsDB";
const collections = ["htmlCards", "cssCards", "javascriptCards"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });
  
  app.post("/submit", (req, res) => {
    console.log(req.body);
  
    db.htmlCards.insert(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  });
  
  app.get("/all", (req, res) => {
    db.htmlCards.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
  
  app.get("/find/:id", (req, res) => {
    db.htmlCards.findOne(
      {
        _id: mongojs.ObjectId(req.params.id)
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
  
  app.post("/update/:id", (req, res) => {
    db.htmlCards.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {
        $set: {
          q: req.body.q,
          a: req.body.a,
          modified: Date.now()
        }
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
        _id: mongojs.ObjectID(req.params.id)
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
  
  app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  