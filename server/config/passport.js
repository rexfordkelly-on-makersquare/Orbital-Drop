const User = require('../controllers/userController.js')



module.exports = function(passport){

  const GitHubStrategy = require('passport-github').Strategy;
  //registers the passport strategy as github. This lets passport
  //know that we'll be interfacing wit github's api
  
  const configAuth = require('./auth.js');
  //require the configuration settings for github. We'll need to
  //hide this file

  passport.serializeUser(function(user, done){
    done(null, user.id)
  });
  //serialize our users

  passport.deserializeUser(function(id, done) {
    //find user in DB, push that shit through
    done(null, id)
  });
  //deserialize them when they leave logout

  passport.use(new GitHubStrategy({
    clientID        : configAuth.github.clientID,
    clientSecret    : configAuth.github.clientSecret,
    callbackURL     : configAuth.github.callbackURL
  },
    function(token, refreshToken, profile, done) {
      process.nextTick(function(){
        User.createUser(token, profile._json.login, profile._json.id)
        return done(null,profile._json)
      })
    }
  ))
}
    //when the user is redirected back to us after authentication, this function checks
    //to see if the user is a registered user with us. If not, it interfaces with the controller
    // and creates a new user. If so, it updates the user token in the DB. We'll need to inititate
    // a kill token feature on logout.