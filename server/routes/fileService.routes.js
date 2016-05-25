var fileServiceController = require('../controllers/clientController.js')
module.exports = function(app, sRouter, busboy, uuid, path){
	app.get('/download', fileServiceController.download)
	//listening for approval requests from sender's client
	sRouter.on('clientRequestApproval', function(socket,args,next){
		socket.emit('serverRequestApproval', data)
	})
	//listen for approval responses from receiver's client
	sRouter.on('clientSendResponse', function(socket,args,next){
		socket.emit('serverSendResponse', data)
	})

}