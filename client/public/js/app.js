var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/partials/allProjects.html',
      controller: 'MainController'
    });
    $locationProvider.html5Mode(true);
});





















