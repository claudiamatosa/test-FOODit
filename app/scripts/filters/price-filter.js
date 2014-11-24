'use strict';

/**
 * @ngdoc filter
 * @name jstestApp.price
 * @scope
 * @description
 * # price
 * Formats a price to GBP.
 */
angular.module('jstestApp')
  .filter('price', function() {
    return function(input) {
      return parseFloat(input)
        .toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    };
  });