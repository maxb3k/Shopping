'use strict';

angular.module('shoppingApp')
    .controller('GoodsCtrl', function ($scope, $http) {
        $http.get('data/nuts.json').success(function (data) {
            $scope.goods = data;
        });
        $scope.order = 'id';
    });
