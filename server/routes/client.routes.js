var clientController = require('../controllers/clientController.js')
var userController = require('../controllers/userController.js')

module.exports = function(app, express){

	app.use(express.static(__dirname + "/../../http_public/mockup"))

	app.get('/api/user_profiles', clientController.sendJSON)
	app.get('/profile', clientController.ensureLogin);
	app.get('/logout', clientController.logout);

	app.get('*', clientController.catchAll)


}