var express = require("express");

var router = express.Router();

// Import the model (taco.js) to use its database functions.
var taco = require("../models/taco.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  taco.all(function(data) {
    var hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    // res.json(data)
    res.render("index", hbsObject);
  });
});

router.post("/api/taco", function(req, res) {
  taco.create([
    "taco_name", "shell", "vegetarian","pickUp"
  ], [
    req.body.name, req.body.shell, req.body.vegetarian, req.body.pickUp
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/taco/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  taco.update({
    pickUp: req.body.pickUp
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
