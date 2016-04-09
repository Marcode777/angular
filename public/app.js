angular.module('RoutingApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first', {
      templateUrl: 'first.html'
    })
    .when('/second', {
      templateUrl: 'second.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);





//ngRoute is injected there
//in .config, $routeProvider is in an array, the first being a string, the second being a function
//this is similar to express routing, except it's in angular
// this tells angular what you want to load via the routes, but you also need to tell angular where to put them, this is where you have to use the ng-view directive in the index.html or wherever page you're displaying