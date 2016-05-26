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
	};
}

console.log("Initializing user utility methods: Complete")
