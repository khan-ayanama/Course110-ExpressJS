const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome, All!!</h1>");
});

app.listen(3000, () => {
  console.log(`Server is running at 3000!!`);
});
