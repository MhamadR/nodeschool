const express = require("express");
const fs = require("fs");

const app = express();
const port = process.argv[2];
const filePath = process.argv[3];

app.get("/books", (_, res) => {
  let books;
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) res.sendStatus(500);
    try {
      books = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500); // If data is invalid json format
    }
    res.json(books);
  });
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
