module.exports = {

	createUser : function(token,userId,username){
	return ({
		token : token,
        username : username,
        githubId: userId,
        notifications: [],
        blackList : [],
        whiteList : [],
        directMessages : [],
        nodeList : [],
        chatMessages : [],
        status : true
		})
	}

}