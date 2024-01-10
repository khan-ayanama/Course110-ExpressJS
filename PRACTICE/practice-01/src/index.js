const express = require("express");
const app = express();

const routes = require("./routes.js");
app.use("/", routes);
// Single Callback

app.listen(3000, () => {
  console.log("Server is listening at 3000!!");
});
