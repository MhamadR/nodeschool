const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (error, list) => {
  if (error) throw error;
  list.forEach((item) => {
    if (path.extname(item) === "." + process.argv[3]) console.log(item);
  });
});
