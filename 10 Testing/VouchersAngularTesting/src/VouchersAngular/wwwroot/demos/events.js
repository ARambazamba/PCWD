
var app = angular.module('eventApp', []);

var ctrl = function ($scope) {

    $scope.count = 0;

    $scope.doClick = function ($event) {
        var el = $event.currentTarget;
        console.log( el.id + " was clicked!");
    }

    $scope.getCount = function() {
        console.log($scope.count);
    }
}

ctrl.$inject = ['$scope'];
app.controller('eventController', ctrl);
