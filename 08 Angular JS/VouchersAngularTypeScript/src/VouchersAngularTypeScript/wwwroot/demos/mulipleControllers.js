var app = angular.module('multCtrls', []);
app.value("AppTitle", "Voucher Editor");

app.controller('topController', ['$scope', function ($scope) {
        $scope.Msg = "The top Controller";
        $scope.toggleCustom = function () {
            $scope.custom = $scope.custom === false ? true : false;
        };
}]);

app.controller('bottomController', ['$scope', function ($scope) {
    $scope.Msg = "The bottm Controller";
    $scope.toggleCustom = function () {
        $scope.custom = $scope.custom === false ? true : false;
    };
}]);

app.controller('appController', ['$scope', 'AppTitle', function ($scope, title) {
    $scope.Title = title;
}]);
