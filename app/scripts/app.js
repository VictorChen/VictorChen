'use strict';

angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngSanitize'])
.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/experience', {
        templateUrl: '../views/experience.html',
        controller: 'MainCtrl',
        name: 'experience'
      })
      .when('/projects', {
        templateUrl: '../views/projects.html',
        controller: 'MainCtrl',
        name: 'projects'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html',
        controller: 'MainCtrl',
        name: 'contact'
      })
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'MainCtrl',
        name: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });

		// use /contact instead of #contact
    $locationProvider.html5Mode(true);
}]);