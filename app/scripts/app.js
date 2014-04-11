'use strict';

angular.module('shoppingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTouch'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/home.html',
                controller: 'GoodsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .filter('price',
    [ '$filter', function (filter) {
        var currencyFilter = filter('currency');
        return function (amount) {
            return currencyFilter(amount, '$') + '/100g';
        }
    } ])
    .run(function($rootScope) {
        $rootScope.ui = {'showCart': false};
    });
