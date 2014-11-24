'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('AppCtrl', ['$scope', 'restaurantName', function ($scope, restaurantName) {
	$scope.restaurantName = restaurantName;
  }
]);
