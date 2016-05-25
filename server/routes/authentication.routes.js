var authController = require('../controllers/authController.js')

module.exports = function(app, passport) {

  var helpers = authController(passport)

  app.get('/', helpers.serveLoginPage);

  app.get('/login/github', helpers.githubRedirect);

  app.get('/login/github/return', helpers.githubReturn);

}
