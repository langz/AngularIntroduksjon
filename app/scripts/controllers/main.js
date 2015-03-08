'use strict';

/**
* @ngdoc function
* @name angularIntroduksjonApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularIntroduksjonApp
*/
angular.module('angularIntroduksjonApp')
.controller('MainCtrl', function ($scope, $anchorScroll, $location, $window) {
  console.log('ref')
  $scope.active='ingen';
  $anchorScroll.yOffset = 60;

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  };
  $scope.getClass = function() {
    return $scope.klassen;
  };
  $scope.setClass = function(yOff){
    console.log(yOff + 's');
    if(yOff >= 250){
      $scope.klassen = 'affix';
    }
    else{
      $scope.klassen = 'sidebar-nav-fixed';
    }
  };
  window.onscroll = function () {
    $scope.setClass(window.pageYOffset);
    // any $scope variable updates
    $scope.setActive(window.pageYOffset);
    $scope.$digest();
  };
  $scope.initActive = function () {
    var tempmin = 80;
    $scope.el1 = jQuery("#sec1").offset().top-tempmin;
    $scope.el2 = jQuery("#sec2").offset().top-tempmin;
    $scope.el3 = jQuery("#sec3").offset().top-tempmin;
    $scope.el4 = jQuery("#sec4").offset().top-tempmin;
    $scope.el5 = jQuery("#sec5").offset().top-tempmin;
    $scope.el6 = jQuery("#sec6").offset().top-tempmin;
    $scope.el7 = jQuery("#sec7").offset().top-tempmin;
    $scope.el8 = jQuery("#sec8").offset().top-tempmin;
  }
  $scope.setActive = function(yOff){
    if(yOff >= $scope.el1 && yOff < $scope.el2){
      $scope.active='sec1';
    }
    else if(yOff >= $scope.el2 && yOff < $scope.el3){
      $scope.active='sec2';
    }
    else if(yOff >= $scope.el3 && yOff < $scope.el4){
      $scope.active='sec3';
    }
    else if(yOff >= $scope.el4 && yOff < $scope.el5){
      $scope.active='sec4';
    }
    else if(yOff >= $scope.el5 && yOff < $scope.el6){
      $scope.active='sec5';
    }
    else if(yOff >= $scope.el6 && yOff < $scope.el7){
      $scope.active='sec6';
    }
    else if(yOff >= $scope.el7 && yOff < $scope.el8){
      $scope.active='sec7';
    }
    else if(yOff >= $scope.el8){
      $scope.active='sec8';
    }
  };
  $scope.getActive = function(el){
    console.log('kaller');
    console.log(el + '==='+$scope.active);
    if(el === $scope.active){

      return true;
    }
    else{
      return false;
    }
  }
  $scope.initActive();
});
