var clientController = require('../controllers/clientController.js')

module.exports = function(app, sRouter){

	app.get('/profile', clientController.ensureLogin);

	app.get('/logout', clientController.logout);

	sRouter.on('sendMessage', function(socket,args,next){
		socket.emit('refreshChat', data)
	})

}