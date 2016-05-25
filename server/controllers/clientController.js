

var helper = {
	ensureLogin : function(req,res){
		require('connect-ensure-login').ensureLoggedIn()
	},
	logout : function(req, res) {
        req.logout();
        res.redirect('/');
    },
    isLoggedIn: function(req, res, next) {
    //eventually this will be implemented as middleware
    //for each route, and we'll be checking to se if the
    //user is logged in.

    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
	}
}

module.exports = helper