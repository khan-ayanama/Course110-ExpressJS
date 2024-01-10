const path = require("path");

const Controllers = {};

Controllers.homeController = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "home.html"));
};
Controllers.aboutController = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "about.html"));
};

module.exports = Controllers;
