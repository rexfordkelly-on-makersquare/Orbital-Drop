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
    });
};

