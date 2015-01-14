'use strict';

angular.module('myApp').controller('MainCtrl', function ($scope, $location) {
	$scope.year = new Date().getFullYear();
	$scope.$on('$routeChangeSuccess', function () {
			var currentPage = $scope.page = $location.path();
      ga('send', 'pageview', currentPage);
  });
});