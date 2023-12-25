// Solution #1
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     req.on("data", (chunk) => {
//       res.write(chunk.toString().toUpperCase());
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Only POST method is allowed");
//   }
// });
// server.listen(process.argv[2]);

// Solution #2
const http = require("http");
const map = require("through2-map");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    req.pipe(map((chunks) => chunks.toString().toUpperCase())).pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Only POST method is allowed");
  }
});
server.listen(process.argv[2]);
