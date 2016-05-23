console.log("Initializing database utility methods")
const db = require('../database/database.js') 

const knex = require('knex')({
          client: 'sqlite3',
    	  connection: {
    	   	  filename: "../database/database.db"
  		  }
});

/**

	User methods that function as a middleware between the database and server.
	These methods use knex to access persistant data in the database and use that 
	information to return that information to the server by query.

**/


exports.dbUtilMethods = {
	addUserDB : function(username){
		knex('table').insert({id : username});
	},
	removeUserDB : function(username){
		knex('user').where('id', username).del();
  		knex('join_black_list').where('user_id', username).del();
  		knex('join_white_list').where('blocked_user_id', username).del();
	},
	fetchWhiteListDB : function(username){
		knex('join_white_list').where({user_id : username}).select('approved_user_id');
	},
	fetchBlackListDB : function(username){
		knex('join_black_list').where({user_id : username}).select('blocked_user_id');
	},
	removeFromBlackListDB : function(username, blockedUser){
		knex('join_black_list').where('user_id', username).del();
		//TODO: finish cross reference
	},
	addToBlackListDB: function(username, blockedUser){
		//TODO: add to white list in DB
	},
	removeFromWhiteListDB : function(username, approvedUser){
		knex('join_white_list').where('blocked_user_id', username).del();
		//TODO: finish cross reference
	},
	addToWhiteListDB: function(username, approvedUser){
		//TODO: add to white list in DB
	},
	fetchMessages : function(username){
		//TODO: finish message fetch
	}
}

console.log("Initializing database utility methods: complete")


