var app = angular.module("nestedApp", []);
app.controller("HomeController", ['$scope', '$log', function ($scope, $log) {
    $scope.title = "Some Title";
}]);

app.controller("ChildController", ['$scope', '$log', function ($scope, $log) {
    $scope.$watch('$parent.title', function (newValue, oldValue) {
        $log.info('title was %s', oldValue);
        $log.info('title is now %s', newValue);
    });
}]);