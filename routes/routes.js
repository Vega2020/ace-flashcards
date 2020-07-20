let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Note: Most of the routes below seem to already exist in our server file (all routes need to be moved from server file to this one)

let Card = require('../models/Card');

router.route('/').get((req, res) => {
    Card.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit/:id').get((req, res) => {
    Card.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    Card.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Card updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    Card.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

router.route()

router.route('/create').post((req, res, next) => {
    Card.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// this posts to /submit; instead of db.htmlcards you need the card model and instead of insert use the mongoose method (which is create). the callback methods being passed in don't work with mongoose, which returns promises, so you have to get rid of the callbacks too.

// lines 72 and 73 are just express functionality
router.post("/submit", (req, res) => {
    console.log(req.body);
    //mongoose code starts here (this is an asynchronouse promise)
    Card.create(req.body).then(function(dbCard) {
        res.json(dbCard)
        console.log("card entered")
    });
  });
  //repeat the process above for the rest of the calls in the top level server.js file.


  // refactor this next:
router.get("/all", (req, res) => {

    await Card.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });


module.exports = router;