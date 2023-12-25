const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  const fileStream = fs.createReadStream(filePath);

  fileStream.on("error", (err) => {
    res.statusCode = 500;
    res.end(`Error reading the file: ${err.message}`);
  });

  fileStream.pipe(res);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
