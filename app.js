const express = require("express");
const request = require("request");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "data")));
app.listen(3000);
