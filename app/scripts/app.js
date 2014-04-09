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
                templateUrl: 'views/main.html',
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
    } ]);


