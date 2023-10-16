// First Express Application

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome Home!!</h1>");
});

app.listen(3000, () => console.log(`App is running at ${port}`));
