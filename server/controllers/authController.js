
const passport = require('passport');


module.exports = function() {

	return({
	serveLoginPage : function(request, response) {
  		response.send('login page')
	},
	
	githubRedirect : passport.authenticate('github'),
   
	githubReturn : passport.authenticate('github', {
            			successRedirect : '/profiles',
            			failureRedirect : '/'
        		   }),
	})
}