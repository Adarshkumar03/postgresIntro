const indexController = require("../controllers/indexControllers");
const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", indexController.getAllUsernames);

module.exports = indexRouter;
