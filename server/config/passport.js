var User = require('../controllers/userController.js')
var userList = []



module.exports = function(passport){

    var GitHubStrategy = require('passport-github').Strategy;
    //registers the passport strategy as github. This lets passport
    //know that we'll be interfacing wit github's api

    
    var configAuth = require('./auth.js');
    //require the configuration settings for github. We'll need to
    //hide this file

    
    passport.serializeUser(function(user, done){
        done(null, user.id)
    });

    //serialize our users

    passport.deserializeUser(function(id, done) {
        for(var i = 0; i < userList.length; i++){
            if(userList[i].userId == id){
                done(null, userList[i])
            }
        }
    });

    //deserialize them when they leave logout

    passport.use(new GitHubStrategy({

        clientID        : configAuth.github.clientID,
        clientSecret    : configAuth.github.clientSecret,
        callbackURL     : configAuth.github.callbackURL

    },

    function(token, refreshToken, profile, done) {
        process.nextTick(function(){
            
            userList.push(User.createUser(token, profile._json.login, profile._json.id))

            return done(null,profile._json)

        })
    }
    ))
    //when the user is redirected back to us after authentication, this function checks
    //to see if the user is a registered user with us. If not, it interfaces with the controller
    // and creates a new user. If so, it updates the user token in the DB. We'll need to inititate
    // a kill token feature on logout.
}