'use strict';

angular.module('myApp')
  .directive('mainHeader', function () {
    return {
    	restrict: 'EA',
      templateUrl: '../../views/header.html'
    };
});