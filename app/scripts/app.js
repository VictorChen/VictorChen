'use strict';

angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngSanitize'])
.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/experience', {
        templateUrl: '../views/experience.html'
      })
      .when('/projects', {
        templateUrl: '../views/projects.html'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html'
      })
      .when('/', {
        templateUrl: '../views/home.html'
      })
      .otherwise({
        redirectTo: '/'
      });

		// use /contact instead of #contact
    $locationProvider.html5Mode(true);
}]);