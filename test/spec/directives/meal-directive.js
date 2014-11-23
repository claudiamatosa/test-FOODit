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
        '<fi-meal meal="meal"></fi-meal>';

    scope.meal = {
      id: '123'
    };

    element = $compile(element)(scope);
    scope.$digest();
  }));
  
  describe('the data binding', function () {
    it('should compute the size to create other values', function() {
      var isolated = element.isolateScope();
      expect(isolated.meal.id).toBe('123');
    });
  });
});