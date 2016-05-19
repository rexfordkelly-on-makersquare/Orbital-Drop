
angular.module("App",
  ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('onLand',{
    url : "/"
  })
  .state('onLogin',{
    url : "/"
  })
  .state('onMisc',{
    url : "/"
  })
  .state('onMisc',{
    url : "/"
  })
})
.factory('appState', function(){
  return {
  }
})
