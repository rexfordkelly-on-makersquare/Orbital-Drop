//grabs the user model we created in dbinit
var UsersModel = require('./dbinit.js');


exports.addUserToDbase = function (username, token) {

    var user = new UsersModel({
      username : username,
      token : token
    });

    user.save(function(err) {
      if (err) {
        console.log("New user not added to DB");
        throw err;
      }

      console.log("New user successfully added to DB");
    });
};

exports.addToBlackListDbase = function (username, blockedUser) {

  UsersModel.update({username: username}, {$push:{blackList : blockedUser}}, 
    function (err){
      if (err) {
        console.log("Add to blacklist failed");
        throw err;
      }

    console.log("Blacklist updated in DB")
    })
}

exports.addToWhiteListDbase = function (username, approvedUser) {

  UsersModel.update({username: username}, {$push:{whiteList : approvedUser}}, 
    function (err){
      if (err) {
        console.log("Add to whitelist failed");
        throw err;
      }

    console.log("Whitelist updated in DB")
    })
}

exports.removeFromBlackListDbase = function (username, blockedUser) {

  UsersModel.update({username: username}, {$pull:{blackList : blockedUser}}, 
    function (err){
      if (err) {
        console.log("Remove from blacklist failed");
        throw err;
      }

    console.log("Blacklist user removed in DB")
    })
}

exports.removeFromWhiteListDbase = function (username, approvedUser) {

  UsersModel.update({username: username}, {$pull:{whiteList : approvedUser}}, 
    function (err){
      if (err) {
        console.log("Remove from whitelist failed");
        throw err;
      }

    console.log("Whitelist user removed in DB")
    })
}

