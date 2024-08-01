const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const createUsernameGet = asyncHandler(async (req, res) => {
  res.render("form");
});

const createUsernamePost = asyncHandler(async (req, res) => {
  console.log("username to be saved: ", req.body.username);
  await db.insertUsername(req.body.username);
  res.redirect("/");
});

module.exports = { createUsernameGet, createUsernamePost};
