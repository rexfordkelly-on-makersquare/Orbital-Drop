module.exports = function(app, sRouter){

	//listening for approval requests from sender's client
	sRouter.on('clientRequestApproval', function(socket,args,next){
		socket.emit('serverRequestApproval', data)
	})
	//listen for approval responses from receiver's client
	sRouter.on('clientSendResponse', function(socket,args,next){
		socket.emit('serverSendResponse', data)
	})


}