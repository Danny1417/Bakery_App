const express = require("express");
const breads = express.Router();
const Breads = require("../models/bread");

// Index
breads.get("/:arrayIndex",(req, res) => {
      res.send(Breads[req.params.arrayIndex])
});

module.exports=breads