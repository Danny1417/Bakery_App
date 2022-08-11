const express = require("express");
const breads = express.Router();
const Breads = require("../models/bread");

// Index
breads.get("/",(req, res) => {
      res.render("Index",
            {
                  breads: Breads,
                  title: "Index page"
            }
      );
});

// show details
breads.get("/:arrayIndex", (req, res) => {
      const index = req.params.arrayIndex
      const bread = Br
      
module.exports=breads