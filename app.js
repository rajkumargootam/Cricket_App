var angularApp = angular.module('CricketApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',
  {
    templateUrl: 'pages/cricket.html',
    controller: 'CricketController'
  })
});


angularApp.controller("CricketController",function($resource){
  var vm=this;
   var cricketResource = $resource('http://cricapi.com/api/cricket');
   vm.cricketResponse = cricketResource.get();
   console.log(vm.cricketResponse);
});
