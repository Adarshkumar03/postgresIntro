const express = require("express");
const newRouter = express.Router();
const newController = require("../controllers/newController");

newRouter.get("/", newController.createUsernameGet);

newRouter.post("/", newController.createUsernamePost);

module.exports = newRouter;
