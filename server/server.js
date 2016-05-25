const        express = require("express");
const 			http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server)

require('./routes/router.js')(app, express, io);

server.listen(process.env.PORT || 3000);
console.log("server listening on 3000")




