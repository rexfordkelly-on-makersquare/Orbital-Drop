const authController = require('../controllers/authController.js')
const passport = require('passport');
require('../config/passport.js')(passport);

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  var helpers = authController(passport)

  app.get('/', helpers.serveLoginPage);

  app.get('/login/github', helpers.githubRedirect);

  app.get('/login/github/return', helpers.githubReturn);

}
