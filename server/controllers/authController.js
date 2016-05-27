
const passport = require('passport');


module.exports = function() {

	return({
	checkAuth : function(req, res, next) {
  		if(req.isAuthenticated()){
  			res.redirect('/profile')
  		} else {
			next()
  		}
	},

	serveLogin : function(req,res){
		res.send('yeay')
	},
	
	githubRedirect : passport.authenticate('github'),
   
	githubReturn : passport.authenticate('github', {
            			successRedirect : '/profile',
            			failureRedirect : '/'
        		   }),
	})
}