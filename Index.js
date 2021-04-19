const http = require("http");
const fs = require("fs");

const fetch = require("node-fetch");
const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("Hello world");
});
server.listen(8000, () => {
  console.log("server is runing");
});
fetch("http://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
      const newData = JSON.stringify(data)
    fs.writeFile("posts.json", newData, () => {
      console.log("Successful");
    });
  });
