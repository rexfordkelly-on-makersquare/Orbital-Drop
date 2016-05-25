var fileServiceController = require('../controllers/fileServiceController.js')
module.exports = function(app, sRouter, busboy, uuid, path, io){
	var helpers = fileServiceController(busboy, uuid, path, io);
	app.get('/download', helpers.download);
	app.post('/upload', helpers.upload);
	app.delete('/', helpers.delete);
	//listening for approval requests from sender's client
	sRouter.on('requestUpload', function(socket,args,next){
		socket.emit('requestDownload', data)
	})
	//listen for approval responses from receiver's client
	sRouter.on('transferApproval', function(socket,args,next){
		socket.emit('transferDecision', data)
	})

}