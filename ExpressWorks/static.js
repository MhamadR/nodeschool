const express = require("express");
const path = require("path");

const app = express();
const port = process.argv[2];
const filePath1 = process.argv[3];
const filePath2 = path.join(__dirname, "public");

app.use(express.static(filePath1 || filePath2));
app.listen(port, () => console.log("Server is running on port 3000"));

// You might need to disable auto formatting on save for the "index.html" file
// In VSC, go to command palette and search for ">File: Save without Formatting" to get the command
