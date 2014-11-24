'use strict';

/**
 * @ngdoc filter
 * @name jstestApp.truncate
 * @scope
 * @description
 * # truncate
 * Truncates a string to a given number of characters,
 * while not leaving incomplete words.
 */
angular.module('jstestApp')
  .filter('truncate', function() {
    return function(input, maxCharacters) {
      var result,
          part2;
      
      if (typeof input !== 'undefined') {
        result = input.substring(0, maxCharacters);
        part2 = input.substring(maxCharacters, input.length) || ' ';

        if (part2.charAt(0) !== ' ') {
          result += part2.split(' ')[0];
        }

        return result;
      }
    };
  });