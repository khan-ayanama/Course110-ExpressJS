const express = require("express");
const app = express();

const router = require("./router.js");
app.use("/myapp", router);

app.listen(3000, () => {
  console.log("server started");
});
