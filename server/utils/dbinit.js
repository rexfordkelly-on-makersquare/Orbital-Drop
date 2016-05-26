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

  dbUtilMethods.addUserToDbase('andrew', '7hfwhf9h9fhw839hr89');


  UsersModel.find({}, function (err, users){
    if(err) throw err;
    console.log(users);
  });


});
