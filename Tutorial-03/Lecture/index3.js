// CALLBACKS

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// One callback
app.get("/onecallback", (req, res) => {
  res.send(`<h1>One Callback</h1>`);
});

// More than one callback
app.get(
  "/twocallback",
  (req, res, next) => {
    console.log("From first callback");
    next();
  },
  (req, res) => {
    res.send(`<h2>Two callback 2</h2>`);
  }
);

// Array of Callbacks
const cb1 = (req, res, next) => {
  console.log("First Callback");
  next();
};
const cb2 = (req, res, next) => {
  console.log("Second Callback");
  next();
};
const cb3 = (req, res, next) => {
  console.log("Third Callback");
  next();
};

app.get("/arraycallback", [cb1, cb2, cb3], (req, res) => {
  console.log("Last Callback");
  res.send("<h1>Array of callback</h1>");
});

app.listen(port, () => {
  console.log("App started");
});
