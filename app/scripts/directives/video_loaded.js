'use strict';

angular.module('myApp')
  .directive('videoLoaded', function () {
    return function ($scope, $element) {
      $element[0].addEventListener('canplay', function () {
        $element.removeClass('hidden');
      });
    };
});