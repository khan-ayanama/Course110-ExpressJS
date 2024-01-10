const express = require("express");
const routers = require("./routes/router.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", routers);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}..`);
});
