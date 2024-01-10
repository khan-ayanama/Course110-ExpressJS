const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome Home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
});

app.get("/api/*", (req, res) => {
  res.send("<h2>You are caling an API</h2>");
});

app.get("*", (req, res) => {
  res.send("<h1>Welcome to Lost Land</h1>");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000!!");
});
