'use strict';

angular.module('myApp')
  .directive('mainHeader', function ($rootScope) {
    return {
    	restrict: 'EA',
      templateUrl: '../../views/header.html',
      scope: {},
      link: function (scope) {
	      $rootScope.$on('$routeChangeSuccess', function (event, current) {
	        scope.page = current.$$route.name;
	      });
	    }
    };
});