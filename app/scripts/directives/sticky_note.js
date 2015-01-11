'use strict';

angular.module('myApp')
  .directive('stickyNote', function () {
    return {
    	restrict: 'EA',
      templateUrl: '../../views/sticky_note.html',
      scope: {
        project: '=',
        showImage: '@'
      }
    };
});