'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.fiExpander
 * @scope
 * @description
 * # fiExpander
 * Sends an exent to expand or contract the outer directive
 */
angular.module('jstestApp')

  .directive('fiExpander', [function() {
    
    function link (scope, element) {
      element.bind('click', function () {
        scope.$emit('status-expand-' + scope.expandable);
      });
    }
    
    var settings = {
      restrict: 'A',
      replace: 'false',
      link: link,
      scope: {
        expandable: '@'
      }
    };

    return settings;
  }]);