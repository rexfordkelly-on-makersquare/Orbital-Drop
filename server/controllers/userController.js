var userMethods = {
	createUser : function(username, token, userId){
		//create new user model
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
	findUser : function(userId, cb){
		
		//method that interfaces with model collections and
		//checks to see if a user is already in the system.
		//the commented out section below is the callback after
		//we interact with the db
		

		// function(){
		// 	if(found){
		// 		cb(null, user)
		// 	} else {
		// 		cb(true, null)
		// 	}
	},	
	blacklist: function(username, blockedUser){
		//black lists a user, removing him from white list if he's whites
		//listen and updates the db
		exports.userUtilMethods.unWhiteList(username, blockedUser)
		username.blackList.push(blockedUser)
		db.addToBlackListDB(username, blockedUser)		
	},
	whitelist: function(username, approvedUser){
		// white lists a user, removing him from the backlist if he's blacklisted
		// and updates the db
		exports.userUtilMethods.unBlackList(username, approvedUser)
		username.whiteList.push(blockedUser)
		db.addToWhiteListDB(username,blockedUser)
	},
	unBlackList: function(username, unblockedUser){
		//removes from blacklist, helper method for whiteList
		//but can also be used standalone
		for(var i = 0; i < username.blacklist.length; i++){
			if(username.blacklist[i] === unblockedUser){
				username.blacklist.splice(i,1);
				db.removeFromBlackListDB(username,blockedUser);
				break;
			}
		}
	},
	unWhiteList: function(username, unapprovedUser){
		//removes from whitelist, helpermethod to blacklist
		//but can also be used standalone
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
}

module.exports = userMethods