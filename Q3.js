const http = require("http");

//Create loca-host and port
const hostname = "localhost";
const port = 3000;

//create requestHandler

const requestHandler = function (req, res) {
  res.writeHead(200);
  res.write("Hello from the server side"); //Response from web
  res.end();
};

//create server
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server is runnih at http://${hostname}:${port}`);
});
