var userList = require('../models/userModel.js')

var helper = {
    ensureLogin : function(req,res){
        res.send("profile Page")
    },
    logout : function(req, res) {
        req.logout();
        res.redirect('/');
    },
    isLoggedIn: function(req, res, next) {

        if (req.isAuthenticated()){
            return next();
        } else {
            res.redirect('/');
        }
        
    },
    sendJSON: function(req,res) {
        res.send(req.user)
    }
}

module.exports = helper