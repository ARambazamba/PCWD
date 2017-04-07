var app = angular.module('multCtrls', []);
app.value("AppTitle", "Voucher Editor");

app.controller('topController', ['$scope', function ($scope) {
        $scope.Msg = "The top Controller";
}]);

app.controller('bottomController', ['$scope', function ($scope) {
    $scope.Msg = "The bottm Controller";
}]);

app.controller('appController', ['$scope', 'AppTitle', function ($scope, title) {
    $scope.Title = title;
}]);
