const { join } = require("path");

const aboutController = (req, res) => {
  res.send("Hello from About");
};
const contactController = (req, res) => {
  //   res.send("Hello from About");
  res.sendFile(join(process.cwd(), "views", "about.html"));
};

module.exports = {
  aboutController,
  contactController,
};
