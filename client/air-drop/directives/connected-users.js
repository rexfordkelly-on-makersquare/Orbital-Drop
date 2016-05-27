/**
	<connected-users > </connected-users>

	The user-node, outlines the basic structure
	for all clien nodes that are active on the 
	network

	## The Markup

	<div id="nodes"> </div>

*/
angular.module('AirDrop').directive('connectedUsers', function() {

	return {
		restrict: 'E',
		controller: function(){
			this.addConnection = function( connectedUser ){
				$scope.connections.push(connectedUser);

			}
		},
		link: function( scope, element, attributes ){},
		templateUrl: '/air-drop/directives/connectedUsers.js',
	}

});