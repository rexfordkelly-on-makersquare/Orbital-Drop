const path = require('path');


module.exports = function(passport) {
	return({
		checkAuth : function(req, res, next) {
  		if(req.isAuthenticated()){
  			res.redirect('/profile')
  		} else {
				next()
  		}
		},

		serveLogin : function(req,res){
			res.sendFile(path.resolve('../http_public/loginClient/index.html'))
		},
	
		githubRedirect : passport.authenticate('github'),
   
		githubReturn : passport.authenticate('github', {
      successRedirect : '/profile',
      failureRedirect : '/login'
    }),
	})
}