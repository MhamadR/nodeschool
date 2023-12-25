const http = require("http");

http
  .get(process.argv[2], (response) => {
    response.setEncoding("utf8");
    response.on("error", console.log(error));
    response.on("data", console.log(data));
  })
  .on("error", console.log(error));
