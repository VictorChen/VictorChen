'use strict';

angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate'])
.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/experience', {
        templateUrl: '../views/experience.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: '../views/projects.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

		// use /contact instead of #contact
    $locationProvider.html5Mode(true);
}]);