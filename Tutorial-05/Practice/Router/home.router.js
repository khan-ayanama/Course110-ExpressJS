const express = require('express');
const homeController = require('../Controller/home.controller');

const homeRouter = express.Router()

homeRouter.get('/',homeController)

module.exports = homeRouter;