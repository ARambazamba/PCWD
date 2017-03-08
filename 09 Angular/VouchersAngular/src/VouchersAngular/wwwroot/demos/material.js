var app = angular.module("materialApp", ['ngMaterial', 'ngMessages']);

app.controller("materialCtrl", function ($scope, $http) {

    $http.get("/api/vouchers").then(function (response) {
        $scope.vouchers = response.data;
    });

    $scope.showItem = function(item) {
        
    }
});