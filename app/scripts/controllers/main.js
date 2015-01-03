'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'awsome things above ^^'
    ];
    $scope.isCollapsed = false;
  });
