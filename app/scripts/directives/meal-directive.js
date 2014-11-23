'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.fiMeal
 * @scope
 * @description
 * # fiMeal
 * Displays a meal.
 */
angular.module('jstestApp')

  .directive('fiMeal', [function() {
    
    var settings = {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'templates/meal.html',
      scope: {
        meal: '='
      }
    };

    return settings;
  }]);