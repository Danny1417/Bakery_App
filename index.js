
const express = require("express");
require("dotenv").config
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine);


app.use("/places", require("./controller/places"));

app.get("/", (req, res) => {
      res.render("home")
});

app.get("*", (req, res) => {
      res.status(404).send("404 Page")
      
});



app.listen(process.env.PORT);