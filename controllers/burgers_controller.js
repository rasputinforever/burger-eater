const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log("Hello from Get")
      console.log(data)
    const burgerObj = {
      burger: data
    };
    res.render("index", burgerObj);
  });
});

// will add the others after determining that this one works

module.exports = router;
