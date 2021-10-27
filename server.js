const http = require('http');

var value = "off";

const requestListener = function (req, res) {
  var arr = req.url.split("/");
  console.log(arr);
  if(arr[1] == "set"){
	value = arr[2];
  }
  res.writeHead(200);
  res.end(value);
}

const server = http.createServer(requestListener);
server.listen(8080);