const path = require("path");

const homeController = (req, res) => {
  //   res.send("Hello");
  res.sendFile(path.join(process.cwd(), "views", "home.html"));
};

module.exports = { homeController };
