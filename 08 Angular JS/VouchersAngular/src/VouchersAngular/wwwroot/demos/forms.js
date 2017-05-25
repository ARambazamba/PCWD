var app = angular.module('app', []);

app.controller('appController', function ($scope) {

    $scope.Remember = true;
    $scope.Car = "VW";
    $scope.Fruits = ["Marillen", "Birnen", "Kirschen"];
});
