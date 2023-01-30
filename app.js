const express = require("express");
const path = require("path");
const app = express();
const questions = require("./assets/script");
// const { PORT } = process.env;
const PORT = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.status(200).render("index.ejs");
});
app.get("/quiz", (req, res) => {
  res.status(201).render("quiz", { questions });
});
app.listen(PORT, () => console.log(`On PORT ${PORT}`));
