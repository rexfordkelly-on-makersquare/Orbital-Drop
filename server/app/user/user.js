const db = require("./dbUtilMethods.js")
console.log("Initializing user utility methods") 

/**

	User methods that function as a middleware between the database methods and server.
	The core function of each method is to interact with the user object on the 
	server, and not meant to hold persistant state on the database.
	

**/

exports.user = {
	createUser : function(username, token){
		dbUtilMethods.addUserDB(username)
		return ({
			token : token,
        	username : username,
        	notifications: [],
        	blackList : [],
        	whiteList : [],
        	directMessages : [],
        	nodeList : [],
        	chatMessages : [],
        	status : true
		})
	},	
	blacklist: function(username, blockedUser){
		exports.user.unWhiteList(username, blockedUser)
		username.blackList.push(blockedUser)
		db.addToBlackListDB(username, blockedUser)		
	},
	whitelist: function(username, approvedUser){
		exports.user.unBlackList(username, approvedUser)
		username.whiteList.push(blockedUser)
		db.addToWhiteListDB(username,blockedUser)
	},
	unBlackList: function(username, unblockedUser){
		for(var i = 0; i < username.blacklist.length; i++){
			if(username.blacklist[i] === unblockedUser){
				username.blacklist.splice(i,1);
				db.removeFromBlackListDB(username,blockedUser);
				break;
			}
		}
	},
	unWhiteList: function(username, unapprovedUser){
		for(var i = 0; i < username.whitelist.length; i++){
			if(username.whitelist[i] === unapprovedUser){
				username.whiteList.splice(i,1);
				db.removeFromWhiteListDB(username,blockedUser);
				break;
			}
		}
	},
	deleteUser : function(username){
		// dbUtilMethods.removeUserDB(username)
		//TODO: Delete user from DB
	},
	suspendUser : function(username){
		//TODO: Suspend user
	}, 
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

console.log("Initializing user utility methods: Complete") 