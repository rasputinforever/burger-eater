const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const burgerObj = {
      burger: data
    };
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers/", function(req, res) {
  console.log(req.body)
  console.log("hello from POST")
  burger.insertOne(req.body.name, function(result) {
    // not sure what this callback is for but it SEEMS TO WORK
    res.end();
  })
})

// now just need update

module.exports = router;
