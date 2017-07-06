// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Render index.html on the main page pour eviter les messages "Cannot GET"
app.get('*', function(req, res){
  //	console.log(req);
  //console.log(res);
  res.sendFile("/public/index.html", {root: '.'});
});
