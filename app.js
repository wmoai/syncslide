var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/slide.html');
});

// var app =require('http').createServer()
  // , io = require('socket.io').listen(app)
  // , fs = require('fs');

// app.listen(8080);


io.sockets.on('connection', function(socket) {
  // socket.emit('currentSlide', { num: 0 });
  console.log(socket.handshake);
  socket.on('setCurSlide', function (data) {
    curSlide = data.num;
    socket.broadcast.emit('curSlide', { num: data.num });
  });
});

