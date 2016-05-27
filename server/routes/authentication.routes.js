const authController = require('../controllers/authController.js')
const passport = require('passport');
const session = require('express-session');
require('../config/passport.js')(passport);

module.exports = function(app, express) {
  app.use(session({secret: 'mySecretKeyofDoooooooomLOLOLOL'}))
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(__dirname + "/../../http_public/login"))
  app.use(function(req,res,next){
  	console.log(req)
  	next()
  })

  var helpers = authController(passport)

  app.get('/', helpers.checkAuth, helpers.serveLogin);

  app.get('/login/github', helpers.checkAuth, helpers.githubRedirect);

  app.get('/login/github/return', helpers.checkAuth, helpers.githubReturn);

}
