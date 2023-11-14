// PATH

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

// /about route
app.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});

// Anything after /api/*
app.get("/api/*", (req, res) => {
  res.send(`<h1>API Page</h1>`);
});

// String pattern
app.get("/ab?cd", (req, res) => {
  res.send(
    `<h1>This will only work for acd or abcd Here character before ? is optional so b is optional</h1>`
  );
});

// Any URL which is not defined
app.get("*", (req, res) => {
  res.send(`<h1>Page not Found</h1>`);
});

app.listen(port, () => {
  console.log("App started");
});
