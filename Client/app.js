
angular.module('app',
  ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('onHome',{
        url : '/',  
        views: {
           'home': {
                templateUrl: '/homeTemplate.html',
                controller: "home"
            }
        } 
    })
    .state('onLogin',{
        url : '/login',
        views: {
           'login': {
                templateUrl: '/loginTemplate.html',
                controller: 'login'
            }
        }
    })
    .state('onLoading',{
        url : '/login/loading',
        views: {
            'loading': {
                templateUrl: '/loadingTemplate.html',
                controller: 'loading'
            }
        }
    })
    .state('onMain',{
        url : "/main",
        views: {
            'main': {
                templateUrl: '/networkViewTemplate.html',
                controller: 'networkView'
            },
            'chatBox': {
                templateUrl: '/chatBoxTemplate.html',
                controller: 'chatBox'
            },
            'notifications': {
                templateUrl: '/notificationsTemplate.html',
                controller: 'notifications'
            }
        }
    })
    .state('onLogout',{
        url : "/logout",
        views: {
            'logout': {
                templateUrl: '/logout.html',
                controller: 'logout'
            }
        }
    })
})
.factory('appState', function(){
    var socket = io()
    return {
        token : null,
        username : null,
        notifications: [],
        blacklist : [],
        whitelist : [],
        directMessages : [],
        nodeList : [],
        chatMessages : [],
        socket : socket
    }
})
