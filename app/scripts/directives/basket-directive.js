'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.fiBasket
 * @scope
 * @description
 * # fiBasket
 * Displays the user's basket.
 */
angular.module('jstestApp')

  .directive('fiBasket', [function() { 
    
    function link (scope, element) {
      scope.$on('status-expand-basket', function () {
        scope.expanded = !scope.expanded;
        element.scope().$apply();
      });
    }
    
    var settings = {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'templates/basket.html',
      link: link
    };

    return settings;
  }]);