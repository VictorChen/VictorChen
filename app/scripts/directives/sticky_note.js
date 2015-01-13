'use strict';

angular.module('myApp')
  .directive('stickyNote', function () {
    return {
    	restrict: 'EA',
      templateUrl: '../../views/sticky_note.html',
      scope: {
        project: '='
      },
      controller: function ($scope) {
      	$scope.showImage = (Math.random() < 0.5);
      }
    };
});