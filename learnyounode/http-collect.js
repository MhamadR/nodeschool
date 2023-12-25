const http = require("http");
const fullData = [];

http
  .get(process.argv[2], (response) => {
    response.setEncoding("utf8");
    response.on("error", (error) => console.log(error));
    response.on("data", (data) => fullData.push(data));
    response.on("end", () => {
      const result = fullData.join("");
      console.log(result.length);
      console.log(result);
    });
  })
  .on("error", (error) => console.log(error));
