
const passport = require('passport');


module.exports = function() {

	return({
	serveLoginPage : function(request, response) {
  		// response.render('login.html')
	},
	
	githubRedirect : passport.authenticate('github'),
   
	githubReturn : passport.authenticate('github', {
            			successRedirect : '/profile',
            			failureRedirect : '/'
        		   }),
	})
}