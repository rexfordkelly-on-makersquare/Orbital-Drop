const db = require("./dbUtilMethods.js")
console.log("Initializing user utility methods") 

exports.userUtilMethods = {
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
		exports.userUtilMethods.unWhiteList(username, blockedUser)
		username.blackList.push(blockedUser)
		db.addToBlackListDB(username, blockedUser)		
	},
	whitelist: function(username, approvedUser){
		exports.userUtilMethods.unBlackList(username, approvedUser)
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
		//TODO: plug in mongoose
	},
	removeUserDB : function(username){
		//TODO: plug in mongoose
	},
	fetchWhiteListDB : function(username){
		//TODO: plug in mongoose
	},
	fetchBlackListDB : function(username){
		//TODO: plug in mongoose
	},
	removeFromBlackListDB : function(username, blockedUser){
		//TODO: plug in mongoose
	},
	addToBlackListDB: function(username, blockedUser){
		//TODO: plug in mongoose
	},
	removeFromWhiteListDB : function(username, approvedUser){
		//TODO: plug in mongoose
	},
	addToWhiteListDB: function(username, approvedUser){
		//TODO: plug in mongoose
	},
	fetchMessages : function(username){
		//TODO: plug in mongoose
	}
}

console.log("Initializing user utility methods: Complete") 