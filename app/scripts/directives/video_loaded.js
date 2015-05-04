'use strict';

angular.module('myApp')
  .directive('videoLoaded', function () {
    return function ($scope, $element) {
      if ($element[0].readyState === 4) {
        $element.removeClass('hidden');
      } else {
        $element.one('canplay', function () {
          $element.removeClass('hidden');
        });
      }
    };
});