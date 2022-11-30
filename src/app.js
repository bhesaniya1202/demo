const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

const static_path = path.join(__dirname, "../public/js");
app.use(express.static(static_path));

app.get("", (req, res) => {
  res.send("hellos");
});

app.get("/about", (req, res) => {
  res.send("wellcome to my aboutpage.");
});

app.get("/contact", (req, res) => {
  res.send("it's a contact side...");
});

app.get("*", (req, res) => {
  res.send("404 error page was't found...");
});

app.listen(port, () => {
  console.log("succsesfully...");
});
