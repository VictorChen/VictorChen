'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope) {
    $scope.isCollapsed = false;
    $scope.year = new Date().getFullYear();
  });