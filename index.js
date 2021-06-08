var http = require('http');
http.createServer(function (req, res) {
  console.log("Hello Pushkar");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
  console.log("Hi");
}).listen(8080);