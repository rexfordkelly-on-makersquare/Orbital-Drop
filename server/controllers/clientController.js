var userList = require('../models/userModel.js')

var helper = {
    ensureLogin : function(req,res){
        if(req.isAuthenticated()){
            res.send("profile Page")
        } else {
            res.redirect('/')
        }
    },
    logout : function(req, res) {
        req.session.destroy();
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
        res.json(req.user)
    }
}

module.exports = helper