// <======================== file to show how to create server using http =============>

// importing the required modules
const http = require("node:http");

// creating the server
const server = http.createServer((req, res) => {
  res.write("hello");
  res.end();
});

const port = 4000;
server.listen(port, () => {
  console.log("server running");
});
