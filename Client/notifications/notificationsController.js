angular.module('notifications', [])
.controller('notifications', function($scope, App){
	
	app.socket.on('newNotification', function(value){
    	App.notifications.push(value)
	})
	
})
