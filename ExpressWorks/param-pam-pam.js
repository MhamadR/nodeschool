const express = require("express");
const crypto = require("crypto");

const app = express();
const port = process.argv[2];

// Solution 1
// app.put("/message/:id", (req, res) => {
//   const str = crypto
//     .createHash("sha1")
//     .update(new Date().toDateString() + req.params.id)
//     .digest("hex");
//   res.send(str);
// });

// Solution 2: use app.param middleware to parse the "id" param
// app.param("id", (req, _, next, value) => {
//   req.id = value;
//   next();
// });
// app.put("/message/:id", (req, res) => {
//   const str = crypto
//     .createHash("sha1")
//     .update(new Date().toDateString() + req.id)
//     .digest("hex");
//   res.send(str);
// });
app.listen(port, () => console.log(`Server is running on port ${port}`));
