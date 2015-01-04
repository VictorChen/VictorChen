'use strict';

angular.module('myApp', ['ui.bootstrap', 'ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/apps', {
        templateUrl: '../views/apps.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

		// use /contact instead of #contact
    $locationProvider.html5Mode(true);
}]);