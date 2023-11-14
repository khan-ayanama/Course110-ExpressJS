const { homeController } = require("../controllers/homeController");
const { aboutController } = require("../controllers/about.controller.js");
const express = require("express");
const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);

module.exports = router;
