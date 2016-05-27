const db = require('../utils/dbUtilMethods.js')


const userUtilMethods = {
	createUser : function(token,username,userId){
		db.addUserToDbase(token,username,userId)
		return ({
			token : token,
        	username : username,
        	userId : userId,
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
		this.unWhiteList(username, blockedUser)
		db.addToBlackListDB(username, blockedUser)
	},
	whitelist: function(username, approvedUser){
		this.unBlackList(username, approvedUser)
		db.addToWhiteListDB(username,blockedUser)
	},
	unBlackList: function(username, unblockedUser){
		db.removeFromBlackListDB(username,blockedUser);	
	},
	unWhiteList: function(username, unapprovedUser){
		db.removeFromWhiteListDB(username,blockedUser);
	}
}

module.exports = userUtilMethods