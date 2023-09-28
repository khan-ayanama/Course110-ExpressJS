const express = require("express");
const babel = require("@babel/core");
console.log("BABEL", babel.getEnv);
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running one port ${port}`);
});
