var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var join = require('path').join;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var PORT = Number(process.env.PORT) || 2986;

app.use(express.static(join(__dirname, '/dist')));

app.get('/',function(req, res, next) {
  var indexPage = join(__dirname, 'dist/index.html');
  return res.status(200).sendFile(indexPage);
})

var httpServer = http.createServer(app);

httpServer.listen(PORT, function(){
  console.log("SERVER RUNNING ON ", PORT);
})