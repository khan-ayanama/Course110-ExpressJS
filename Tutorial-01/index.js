const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<ul><li>Home</li><li>Foreign</li></ul>");
});

app.listen(3000, () => {
  console.log("server is running at port 3000!!");
});
