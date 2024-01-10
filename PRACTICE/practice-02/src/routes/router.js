const express = require("express");
const Controllers = require("../controllers/homeController.js");
const router = express.Router();

router.get("/", Controllers.homeController);
router.get("/about", Controllers.aboutController);

module.exports = router;
