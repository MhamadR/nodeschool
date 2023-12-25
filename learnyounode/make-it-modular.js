const myModule = require("./mymodule");

const directory = process.argv[2];
const extension = process.argv[3];

if (!directory || !extension) {
  return console.error(
    "Usage: node make-it-modular.js <directory> <extension>"
  );
}

myModule(directory, extension, (error, data) => {
  if (error) console.log(error);
  console.log(data.join("\n"));
});
