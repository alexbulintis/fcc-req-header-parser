var express = require('express');
var app = express();

app.get("*", function(req, res){
  var data = {
    "ip": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    "lang": req.headers['accept-language'].split(',')[0],
    "os": req.headers['user-agent'].split(')')[0].split('(')[1]
  };
  res.send(data);
});

app.listen(process.argv[2] || 1337);
