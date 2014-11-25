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
    var tagTypeRegExp = /#([a-zA-Z_]).+:/g,
        tagSignsRegExp = /([#:])/g;
    
    /**
     * @ngdoc method
     * @name filterTags
     * @description
     * # filterTags
     * Gets an array of tags and filters it into an object with the following
     * format:
     * 
     * {
     *  type: course,
     *  name: main_course
     * },
     * 
     * {
     *  type: ingredient,
     *  name: chicken
     * }
     * 
     * No tag type defaults to ingredient.
     */
    function filterTags (tags) {
      var tagList = [],
          tagType;

      tags.forEach(function (tag) {
        tagType = tag.match(tagTypeRegExp) ?
          tag.match(tagTypeRegExp)[0].replace(tagSignsRegExp, '') : 'ingredient';

        tagList.push({
          type: tagType,
          name: tag.replace(tagTypeRegExp, '')
        });
      });

      return tagList;
    }
    
    function link (scope, element) {
      scope.meal.tags = filterTags(scope.meal.tags);
      scope.expanded = (scope.expanded === 'true');
      
      scope.addToBasket = function (item) {
        scope.$emit('add-to-basket', item);
      };
      
      scope.$on('status-expand-meal', function () {
        scope.expanded = !scope.expanded;
        element.scope().$apply();
      });
    }
    
    var settings = {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'templates/meal.html',
      link: link,
      scope: {
        meal: '=',
        expanded: '='
      }
    };

    return settings;
  }]);