var path = require('path');
var express = require('express');

var app = express();

app.set('env', process.env.NODE_ENV || 'development');

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 't0ps3kr1t' }));

app.get('/', function(req, res) {
  res.send(200, 'ping!');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Listening on ' + port);
});
