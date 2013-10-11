var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
  socket.emit('broadcastSlide', { num: 0 });
  socket.on('changeSlide', function (data) {
    socket.broadcast.emit('broadcastSlide', { num: data.num });
  });
});

