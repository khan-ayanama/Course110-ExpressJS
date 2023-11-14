// First Express Application

// const express = require("express");
import express from 'express'
const app = express();
const port = 3000;

const data =  fetch('https://www.expample.com')

app.get("/", (req, res) => {
  res.send("<h1>Welcome Home!!</h1>");
});

app.listen(3000, () => console.log(`App is running at ${port}`));
