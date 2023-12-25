const http = require("http");

const urls = [];
for (let i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    http
      .get(url, (response) => {
        const data = [];
        response.setEncoding("utf8");
        response.on("error", (error) => reject(error));
        response.on("data", (chunk) => data.push(chunk));
        response.on("end", () => {
          resolve(data.join(""));
        });
      })
      .on("error", (error) => reject(error));
  });
};

const promises = urls.map((url) => fetchData(url));

Promise.all(promises)
  .then((dataArray) => {
    let data = dataArray.join("\n");
    console.log(data);
  })
  .catch((error) => console.log(error));
