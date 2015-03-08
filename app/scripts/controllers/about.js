'use strict';

/**
 * @ngdoc function
 * @name angularIntroduksjonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularIntroduksjonApp
 */
angular.module('angularIntroduksjonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
