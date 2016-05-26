
module.exports = {
  createUser: function(socketId, githubId){
	var user = {};
	user.socketId = socketId;
	user.githubId = githubId;
	user.files = [];
	return user
  },
  createfiles: function(fileId, filename){
	var file = {};
	file.fileId = fileId;
	file.filename = filename;
	return file;
  }
};

