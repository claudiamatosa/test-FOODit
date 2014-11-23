'use strict';

/**
 * @ngdoc service
 * @name jstestApp.MenuService
 * @description
 * # MenuService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
	.factory('MenuService', ['$http', function ($http) {
		var service = {
			get: get
		};

		return service;

		function get () {
			return $http.get('/data/menu.json');
		}
	}]);

