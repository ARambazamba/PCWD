var app = angular.module("dateApp", ['ngInputCurrency', 'mgcrea.ngStrap']);

app.controller("dateController", function($scope) {

    $scope.date = new Date();
    $scope.amount = 12000.10;

    $scope.logDate = function() {
        console.log("the date & time: " + $scope.date);
        console.log("the amount: " + $scope.amount);
    }
});