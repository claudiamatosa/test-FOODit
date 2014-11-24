'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('BasketCtrl', ['$rootScope', function ($rootScope) {
    var basket = this,
        key;
    
	this.items = {};
    this.total = 0;
    
    this.getItemsFromLocalStorage = function () {
      if (localStorage.getItem('products')) {
        this.items = JSON.parse(localStorage.getItem('products'));
        
        for (key in this.items) {
          this.total += parseFloat(this.items[key].price);
        }
      }
    };
    
    this.addItemsToLocalStorage = function () {
      localStorage.setItem('products', JSON.stringify(this.items));
    };
    
    this.hasProducts = function () {
      return Object.keys(this.items).length;
    };
    
    this.getCourse = function (item) {
      var courseTag = item.tags.filter(function (tag) {
        return tag === 'course';
      });
      
      return courseTag.name;
    };
    
    $rootScope.$on('add-to-basket', function (event, item) {
      if (basket.items[item.id]) {
        basket.items[item.id].quantity += 1;
      } else {
        basket.items[item.id] = {
          type: basket.getCourse(item),
          name: item.name,
          price: item.price,
          quantity: 1
        };
      }
      
      basket.total += parseFloat(item.price);
      
      basket.addItemsToLocalStorage();
    });
    
    this.getItemsFromLocalStorage();
  }
]);
