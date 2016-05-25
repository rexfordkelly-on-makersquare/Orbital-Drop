var        express = require("express");
var           cors = require('cors')
var           http = require('http');
var            app = express();
var         morgan = require('morgan');
var   cookieParser = require('cookie-parser');
var     bodyParser = require('body-parser');
var           path = require('path');
var            app = express();
var         server = http.createServer(app).listen(process.env.PORT || 3000)
var       mongoose = require('mongoose');
var expressSession = require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true });
var             io = require('socket.io')(server)
var   SocketRouter = require('socket.io-events');
var        sRouter = SocketRouter();  
var       passport = require('passport');
var				fs = require('fs');
var 		busboy = require('busboy');
var			  uuid = require('uuid');

require('./config/passport.js')(passport);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

require('./routes/router.js')(app, express, passport, sRouter, busboy, uuid, path, fs, io);
io.use(sRouter)

console.log("server listening on 3000")




