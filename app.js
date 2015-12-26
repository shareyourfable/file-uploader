var express = require('express');
var app = express();
var http = require('http');

//app.use('/client', express.static( __dirname + '/client' ));

//Deliver homepage on root request
app.get('/', function (req, res) {
  //console.log(req);
  console.log("Accessing homepage on root");
  res.sendFile(__dirname + '/client/index.html');
});

//Catch 404 errors
//TODO: Create 404 file and send that instead
app.use(function (req, res) {
  res.status(404).send("<h1>404</h1><p>File not found.</p>");
});

var server = http.createServer(app);
server.listen(process.env.PORT, process.env.IP);