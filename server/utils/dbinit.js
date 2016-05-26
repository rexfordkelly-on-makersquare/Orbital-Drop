var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/airdrop';
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUtilMethods = require ('./dbUtilMethods');

mongoose.Promise = global.Promise;

mongoose.connect(dbURI);

db.on('error', console.error.bind(console, 'DB connection error:'));

db.once('open', function(){
  console.log("Database successfully connected");

//setup user schema
  var Users = new Schema({
    token : String,
    username : String,
    notifications: [],
    blackList : [],
    whiteList : [],
    directMessages : [],
    nodeList : [],
    chatMessages : [],
    status : Boolean
  });

  var UsersModel = mongoose.model('Users', Users);

  module.exports = UsersModel;
  //testing the export from dbUtilMethods- not working
  //dbUtilMethods.addUserToDbase('andrew', '7hfwhf9h9fhw839hr89');
  
  //The direct add/save method works (runs every init, need to clean up)
  var user = UsersModel({
    token: "7458392798547fdaa",
    username: "yaoandrew",
    notifications : ["hello", "goodbye", "hola"]
  });

  user.save(function(err) {
    if (err) throw err;

    console.log('User created!');
  });


  //verify the above user is created in by with query
  UsersModel.find({}, function (err, users){
    if(err) throw err;
    console.log(users);
  });

  UsersModel.update({username: "yaoandrew"}, {$pull: {"notifications": "hello"}},
    function (err){
      if(err) throw err;
      console.log("update successful")
    });

});
