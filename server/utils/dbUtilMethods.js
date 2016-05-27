//grabs the user model we created in dbinit
var UsersModel = require('../models/userModel.js');

var helpers = {

  addUserToDbase : function (token, username, userId) {

    var user = new UsersModel({
      token : token,
      username : username,
      userId : userId
    });

    user.save(function(err) {
      if (err) {
        console.log("New user not added to DB");
        throw err;
      }

      console.log("New user successfully added to DB");
    });
  },

  addToBlackListDbase : function (username, blockedUser) {

  UsersModel.update({username: username}, {$push:{blackList : blockedUser}}, 
    function (err){
      if (err) {
        console.log("Add to blacklist failed");
        throw err;
      }

    console.log("Blacklist updated in DB")
    })
  },

  addToWhiteListDbase : function (username, approvedUser) {

  UsersModel.update({username: username}, {$push:{whiteList : approvedUser}}, 
    function (err){
      if (err) {
        console.log("Add to whitelist failed");
        throw err;
      }

    console.log("Whitelist updated in DB")
    })
  },

  removeFromBlackListDbase : function (username, blockedUser) {

  UsersModel.update({username: username}, {$pull:{blackList : blockedUser}}, 
    function (err){
      if (err) {
        console.log("Remove from blacklist failed");
        throw err;
      }

    console.log("Blacklist user removed in DB")
    })
  },

  removeFromWhiteListDbase : function (username, approvedUser) {

  UsersModel.update({username: username}, {$pull:{whiteList : approvedUser}}, 
    function (err){
      if (err) {
        console.log("Remove from whitelist failed");
        throw err;
      }

    console.log("Whitelist user removed in DB")
    })
  }
}

module.exports = helpers

