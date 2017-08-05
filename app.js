const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const sockets = require('./sockets');
const http = require('http');

const auth = require('./auth/user');
const index = require('./routes/index');

const server = http.createServer(app);
const io = require('socket.io')(server);

sockets(io);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/auth', auth);
app.use('/', index);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: `${err.message} ☔️`,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = {
  app,
  server
};
