const express = require("express");
const breads = express.Router();
const Breads = require("../models/bread");

// Index
breads.get("/",(req, res) => {
      res.render("Index",
            {
                  breads: Bread,
                  title: "Index page"
            }
      )
});

module.exports=breads