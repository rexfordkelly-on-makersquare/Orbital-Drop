var fileServiceController = require('../controllers/fileServiceController.js')
module.exports = function(app, sRouter, busboy, uuid, path, io){
	var helpers = fileServiceController(busboy, uuid, path, io);
	app.get('/download', helpers.download);
	app.post('/upload', helpers.upload);
	//listening for approval requests from sender's client
	sRouter.on('clientRequestApproval', function(socket,args,next){
		socket.emit('serverRequestApproval', data)
	})
	//listen for approval responses from receiver's client
	sRouter.on('clientSendResponse', function(socket,args,next){
		socket.emit('serverSendResponse', data)
	})

}