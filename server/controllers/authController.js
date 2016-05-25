



module.exports = function(passport) {

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