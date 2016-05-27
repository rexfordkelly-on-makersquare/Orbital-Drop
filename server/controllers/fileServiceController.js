const fs = require('fs');
const busboy = require('busboy');
const uuid = require('uuid');
const path = require('path');
const socketIO = require('socket.io');
var users = require('../models/activeUserModel.js');
var util = require('../utils/fileServiceUtil.js');


module.exports = function(express, socketedServer){
	// adds event listeners to the http.Server instance
	var io = socketIO(socketedServer);
	var userSockets = {}

	/*** 
		The users object will hold the state of our application.  When a new user establishes/ends a 
		socket connection, we will add/remove the user instance and emit the users list to all clients.
	***/
	io.on('connection', function(socket){
		socket.on('createUser', function(sessionId){
			users[sessionId] = util.createUser(socket.id, sessionId);
			userSockets[socket.id] = socket;
			io.sockets.emit('updateUsers', users);
		})

		socket.on('disconnect', function () {
			var user = util.findUserBySocketId(socket.id, users);

			delete userSockets[socket.id];
		 	delete users[user.userId];
			io.sockets.emit('updateUsers', users);
		});
	})

	return({
		upload : function(request, response, error){
			/*** 
			  bus boy is responsible for parsing multipart form data since express 4.0 droped multipart handling
			  https://www.npmjs.com/package/busboy
			***/
			var busboy = new Busboy({ headers: request.headers });
		    // add listener when bus boy handles a file
		    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
		      // create a unique id and append to filename so there isn't namesake clashing
		      var uniqueId = uuid.v4();
		      // asychronously write a file using a stream to uploads folder
		      fstream = fs.createWriteStream(__dirname + '/uploads/' + uniqueId + filename);
		      file.pipe(fstream);

		      // add uniqueId and filename to user receiving download
		      // users[req.user.id].files.push(util.createFile(uniqueId, filename));

		      // emit a download prompt to the user that is receiving the upload
		      // userSockets[1].emit('requestDownload', filename);
		      
		    });
		   
		    // close request
		    busboy.on('finish', function() {
		      response.writeHead(303, { Connection: 'close', Location: '/' });
		      response.end();
		    });
		    request.pipe(busboy);
		},
		download : function(request, response, error) {
			// currently relies on front end to send uniqueId + filename
			// Refactor: 
			//	to use global user object
			//	have error checking if file isn't found
			//  user validation
			var filepath = __dirname + '/uploads/' + request.query.uniqueId + request.query.filename;
			var filename = path.basename(filepath);
			var mimetype = mime.lookup(filepath);

			// set headers so user will download file
			response.setHeader('Content-disposition', 'attachment; filename=' + filename);
			response.setHeader('Content-type', mimetype);

			// asychronously chunk file to response object which is responsible for holding the file that the user will consume
			var filestream = fs.createReadStream(filepath);
			filestream.pipe(response);

			// delete file after user has downloaded
			response.on('finish',function(){
			  fs.unlink(filepath, function(error){
			  	if(error)
			  		console.log(error);
			  });
			});
		},
		delete: function(request, response, error) {
			var filepath = __dirname + '/uploads/' + request.body.uniqueId + request.body.filename;
			var filename = request.body.uniqueId + request.body.filename;

			fs.unlink(filepath, function(error){
				if(error)
					console.log(error);
				response.send ({
					status: "200",
					response: {
					filename: filename,
					success: true
					}
				});   
			});
		},
		test: function(request, response, error) {
			if(request.session.passport){
				userId = request.session.passport.user
				response.sendFile(path.resolve('controllers/test/test.html'));
			}else{
				response.send('login puhleaze');
			}
			
			
		}

	})
	
}