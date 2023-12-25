const http = require("http");
const port = process.argv[2];

const parseTime = (date) => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
};

const unixTime = (date) => {
  return { unixtime: date.getTime() };
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let result;

  if (url.pathname === "/api/parsetime") {
    const date = new Date(url.searchParams.get("iso"));
    result = parseTime(date);
  } else if (url.pathname === "/api/unixtime") {
    const date = new Date(url.searchParams.get("iso"));
    result = unixTime(date);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Wrong path");
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
});
server.listen(port);
