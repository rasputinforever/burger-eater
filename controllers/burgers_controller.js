const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

// used on page loads, just sends all data to page
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const burgerObj = {
      burger: data
    };
    res.render("index", burgerObj);
  });
});

// for adding a new burger
router.post("/api/burgers/", function(req, res) {
  console.log(req.body)
  console.log("hello from POST")
  burger.insertOne(req.body.name, function(result) {
    // not sure what this callback is for but it SEEMS TO WORK
    res.end();
  })
})

router.put("/api/burgers/:id", function(req, res) {
 
  const burgID = req.params.id;
  console.log("Hello from PUT with id", burgID)
  burger.updateOne(burgID, function() {
      res.end();
    
  });

})

module.exports = router;

