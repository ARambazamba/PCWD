var app = angular.module("app", ["ngMaterial"]);

app.controller("baseCtrl", function ($scope) {

    $http.get("/api/vouchers").then(function (response) {
        $scope.vouchers = response.data;
    });

});