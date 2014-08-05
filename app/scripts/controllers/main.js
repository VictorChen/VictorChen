'use strict';

/**
 * @ngdoc function
 * @name angularTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTutorialApp
 */
angular.module('angularTutorialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
