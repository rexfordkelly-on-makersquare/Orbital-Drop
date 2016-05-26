
var fileServiceController = require('../controllers/fileServiceController.js')
module.exports = function(app, express, socketedServer){
	
	var helpers = fileServiceController(socketedServer);
	app.get('/files/download', helpers.download);
	app.post('/files/upload', helpers.upload);
	app.delete('/files/', helpers.delete);

	// testing route remove after client session is completed
	//app.get('/files/', helpers.test);

	// need to refactor sockets
	// sockets.on('connection',function(socket){
	// 	console.log('connected')
	// })
	// //listening for approval requests from sender's client
	// sRouter.on('connection', function(socket,args,next){
	// 	console.log(socket, 'connected')
	// })

	// //listening for approval requests from sender's client
	// sRouter.on('requestUpload', function(socket,args,next){
	// 	socket.emit('requestDownload', data)
	// })
	// //listen for approval responses from receiver's client
	// sRouter.on('transferApproval', function(socket,args,next){
	// 	socket.emit('transferDecision', data)
	// })

}