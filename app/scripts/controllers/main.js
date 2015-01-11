'use strict';

angular.module('myApp').controller('MainCtrl', function ($scope) {
	$scope.year = new Date().getFullYear();
});