'use strict';

describe('Directive: fiMeal', function() {
  var element, scope;

  beforeEach(function() {
    module('fi.templates');
    module('jstestApp');
  });

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element =
        '<fi-meal meal="meal" expanded="false"></fi-meal>';

    scope.meal = {
      id: '123',
      tags: ['foo', '#course:bar']
    };

    element = $compile(element)(scope);
    scope.$digest();
  }));
  
  describe('the data manipulation', function () {
    var isolated;
    
    beforeEach(function () {
      isolated = element.isolateScope();
    });
    
    it('should assign the meal to the scope', function() {
      expect(isolated.meal.id).toBe('123');
    });
    
    it('should return a list of tags with tag type information', function () {
      expect(isolated.meal.tags[0].type).toEqual('ingredient');
      expect(isolated.meal.tags[0].name).toEqual('foo');
      
      expect(isolated.meal.tags[1].type).toEqual('course');
      expect(isolated.meal.tags[1].name).toEqual('bar');
    });
  });
});