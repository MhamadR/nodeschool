const fs = require("fs");
const path = require("path");

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (error, list) => {
    if (error) return callback(error, null);
    const data = list.filter((item) => path.extname(item) === `.${extension}`);
    return callback(null, data);
  });
};
