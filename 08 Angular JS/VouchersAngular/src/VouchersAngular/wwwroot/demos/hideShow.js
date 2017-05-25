angular.module('demoApp', []).controller('AppCtrl', ['$scope', function ($scope) {
        $scope.custom = true;
        $scope.toggleCustom = function () {
            $scope.custom = !$scope.custom; 
        };
}]);
