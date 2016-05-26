
module.exports = {
	createUser: function(socketId, userId){
		var user = {};
		user.socketId = socketId;
		user.userId = userId;
		user.files = [];
		return user
	},
	createFile: function(fileId, filename){
		var file = {};
		file.fileId = fileId;
		file.filename = filename;
		return file;
	},
	findUserBySocketId: function(users, socketId){
		for(var key in users){
			var user = users[key];
			if(user.socketId === socketId){
				return user;
			}
		}
		
		return false;
	}
};

