const express = require("express");
const path = require("path");
const app = express();
// const { PORT } = process.env;
const PORT = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("index.ejs");
  //   res.send("This is an Home-Page for quiz app");
});
app.listen(PORT, () => console.log(`On PORT ${PORT}`));
