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
        $scope.toggleNote = function($event) {
          // Don't toggle note if clicked on a link
          if ($event.target.tagName.toLowerCase() !== 'a') {
            $scope.showImage = !$scope.showImage;
            return $scope.showImage;
          }
        };
      }
    };
});