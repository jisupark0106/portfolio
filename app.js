const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.listen(3000);
