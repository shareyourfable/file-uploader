var express = require('express');
var app = express();

var http = require('http');

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, 'userID-' + 'userID.files.length+1-' + 'file.extension' + file.fieldname);
  }
});
var upload = multer( { storage : storage} );

app.use('/bower_components', express.static( __dirname + '/bower_components' ));
app.use('/static', express.static( __dirname + '/static' ));

//Deliver homepage on root request
app.get('/', function (req, res) {
  //console.log(req);
  console.log("Accessing homepage on root");
  res.sendFile(__dirname + '/client/index.html');
});

app.post('/upload-file', upload.single('fable-file'), function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
});

//Catch 404 errors
//TODO: Create 404 file and send that instead
app.use(function (req, res) {
  res.status(404).send("<h1>404</h1><p>File not found.</p>");
});

var server = http.createServer(app);
server.listen(process.env.PORT, process.env.IP);