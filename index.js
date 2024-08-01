const express = require("express");
const app = express();
const newRouter = require("./routes/new");
const indexRouter = require("./routes/index");
const path = require("node:path");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
