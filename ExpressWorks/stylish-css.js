const express = require("express");
const path = require("path");
const stylus = require("stylus");

const app = express();
const port = process.argv[2];
const filePath1 = process.argv[3];
const filePath2 = path.join(__dirname, "public");

app.use(stylus.middleware(filePath1 || filePath2));
app.use(express.static(filePath1 || filePath2));
app.listen(port, () => console.log(`Server is running on port ${port}`));
