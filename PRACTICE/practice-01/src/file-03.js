const express = require("express");
const app = express();

// Single Callback
app.get("/singlecallback", (req, res) => {
  res.send("<h1>Single Callback</h1>");
});

// double Callback
app.get(
  "/doublecallback",
  (req, res, next) => {
    console.log("FirstCallback");
    next();
  },
  (req, res) => {
    res.send("<h2>After two callback</h2>");
  }
);

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

app.listen(3000, () => {
  console.log("Server is listening at 3000!!");
});
