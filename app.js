var angularApp = angular.module('CricketApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',
  {
    templateUrl: 'pages/cricket.html',
    controller: 'CricketController',
    controllerAs: 'hm'
  })

  .when ('/cricketdetails/:uniqId',
  {
    templateUrl: 'pages/cricketdetails.html',
    controller: 'CricketDetailsController',
    controllerAs:'dc'
  })
});



angularApp.controller("CricketController",['$resource','$filter',function($resource,$filter){
  var vm=this;
   var cricketResource = $resource('http://cricapi.com/api/cricket');
   vm.cricketResponse = cricketResource.get();
   console.log(vm.cricketResponse);
}]);



angularApp.controller("CricketDetailsController",['$resource','$filter','$routeParams',
function($resource,$filter,$routeParams){
   var vm=this;
   var id = $routeParams.uniqId;
   var cricDetails = $resource('http://cricapi.com/api/cricketScore',{unique_id:id});
   vm.cricResponse = cricDetails.get();
   console.log(vm.cricResponse);

}]);
