var app = angular.module("mainApp", []);

app.controller('LocalizationController', function ($scope) {
    $scope.wage = 1300;
    $scope.born = new Date(1970, 3, 2);
    $scope.person = "Alexander Pajer";
});