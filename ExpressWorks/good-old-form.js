const express = require("express");
const path = require("path");

const app = express();
const port = process.argv[2];

// In recent versions of Express.js, the body-parser middleware has been deprecated in favor of using
// the built-in express.urlencoded() middleware and express.json() middleware to handle x-www-form-urlencoded and JSON data

app.use(express.urlencoded({ extended: false })); // comment this line and uncomment the following code to use the body-parser if installed
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
app.post("/form", (req, res) => {
  res.send(req.body.str.split("").reverse().join(""));
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
