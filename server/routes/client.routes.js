var clientController = require('../controllers/clientController.js')

module.exports = function(app){

	app.get('/profile', clientController.ensureLogin);
	app.get('/logout', clientController.logout);


}