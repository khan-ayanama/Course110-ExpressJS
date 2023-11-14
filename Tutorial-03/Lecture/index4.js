// Chained Route Callbacks

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app
  .route("/students")

  .all((req, res, next) => {
    console.log("HTTP ALL Request");
    next();
  })
  .post(() => {
    console.log("post method");
  })
  .patch(() => {
    console.log("patch method");
  })
  .get((req, res) => {
    console.log("HTTP get Request");
    res.send("<h1>GET METHOD</h1>");
  });

app.listen(port, () => {
  console.log("App started");
});
