module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Client connected', socket.id);

    socket.on('disconnect', (data) => {
      console.log('Client disconnected:', socket.id);
  });

    socket.on('hello', (data) => {
      console.log(data);
      sockets.emit('hello', data);
    });
  });
}
