const express = require("express");
const path = require("path");

const app = express();
const port = process.argv[2];
const filePath1 = process.argv[3];
const filePath2 = path.join(__dirname, "templates");

app.set("view engine", "pug");
app.set("views", filePath1 || filePath2);

app.get("/home", (_, res) => {
  res.render("index", { date: new Date().toDateString() });
});
app.listen(port, () => console.log("Server is running on port 3000"));
