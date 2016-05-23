console.log("Initializing authentication module")

var user = require("../helperMethods/userUtilMethods.js");

exports.passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

exports.passport.use(new GitHubStrategy({
    clientID: '58a7aeed22f6866e9366',
    clientSecret: '116b354f3c5b782ffc46df15aec8f92a783c9852',
    callbackURL: "http://localhost:3000/login/github/return"
  },
  function(accessToken, refreshToken, profile, cb) {
      activeUsers.push(user.userUtilMethods.createUser(profile._json.login, accessToken))
      return cb(null, profile)

  }
));


exports.passport.serializeUser(function(user, cb) {
    cb(null, user);
});

exports.passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});         

console.log("Initializing authentication module : Complete")
