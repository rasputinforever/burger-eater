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
  burger.insertOne(req.body.name, function() {
    res.end();
  })
})

// for 'devouring' a burger
router.put("/api/burgers/:id", function(req, res) {
  const burgID = req.params.id;
  burger.updateOne(burgID, function() {
      res.end();  
  });
})

module.exports = router;

