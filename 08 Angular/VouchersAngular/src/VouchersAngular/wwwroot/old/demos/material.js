var app = angular.module("materialApp", ['ngMaterial', 'ngMessages']);

app.controller("materialCtrl", function ($scope, $http, $mdDialog) {

    $http.get("/api/vouchers").then(function (response) {
        $scope.vouchers = response.data;
    });

    $scope.showItem = function(item, evt) {
        $mdDialog.show({
            controller: calculatorController,
            templateUrl: "/demos/currencyCalculator.html",
            parent: angular.element(document.body),
            locals: { detailValue: item.BruttoAmount },
            targetEvent: evt,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    }
});

function calculatorController($scope, $http, $mdDialog, detailValue) {

    $scope.Settings = { Currency: "USD", ForeignValue: detailValue, EuroValue: 0, ExchangeRate: 0, Date: new Date(), Currencies: new Array() }

    $http.get("http://api.fixer.io/latest").then(function (result) {

        for (var rate in result.data.rates) {
            $scope.Settings.Currencies.push(rate);
        }
    });

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.doConvert = function () {
        $.ajax({
            url: "http://api.fixer.io/" + moment($scope.Settings.Date).format('YYYY-MM-DD'),
            cache: false
        }).done(function (data) {
            $scope.Settings.ExchangeRate = data.rates[$scope.Settings.Currency];
            $scope.Settings.EuroValue = parseFloat($scope.Settings.ForeignValue / $scope.Settings.ExchangeRate).toFixed(2);
        });
    }

    $scope.exitCalc = function (val) {
        $mdDialog.hide(val);
    };
}