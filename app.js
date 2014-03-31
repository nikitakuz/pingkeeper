var http = require('http');
var express = require('express');

var app = express();

app.set('env', process.env.NODE_ENV || 'development');

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 't0ps3kr1t' }));

var hosts = [
  'debugger.herokuapp.com',
  'jadeless-fire.herokuapp.com',
  'fotpa.herokuapp.com',
  'www.jadeless.com',
  'www.rgbhelper.com'
];

app.get('/', function(req, res) {
  for (var i = 0; i < hosts.length; i++) {
    pingHost(hosts[i]);
  }
  res.send(200, 'ping!');
});

function pingHost(host) {
  var req = http.request({hostname: host}, function(res) {
    console.log('Status code ' + res.statusCode + ' received from ' + host);
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  console.log('Sending request to ' + host);
  req.end();
}

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Listening on ' + port);
});
