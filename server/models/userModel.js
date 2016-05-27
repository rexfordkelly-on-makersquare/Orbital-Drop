const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/airdrop';
const db = mongoose.connection;
const Schema = mongoose.Schema;
const dbUtilMethods = require ('../utils/dbUtilMethods');

mongoose.Promise = global.Promise;

mongoose.connect(dbURI);

db.on('error', console.error.bind(console, 'DB connection error:'));

db.once('open', function(){
  console.log("Database successfully connected");
});

//setup user schema
const Users = new Schema({
  token : String,
  username : String,
  userId : Number,
  notifications: [],
  blackList : [],
  whiteList : [],
  directMessages : [],
  nodeList : [],
  chatMessages : [],
  status : Boolean
});

const UsersModel = mongoose.model('Users', Users);

module.exports = UsersModel;