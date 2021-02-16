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
  console.log("hello from POSt")
});

// will add the others after determining that this one works

module.exports = router;
