var app = angular.module('valuesApp', []);

app.value('password', 'P@ssw0rd');
app.value('JsonConfig', {
    appName: 'Voucher App',
    appVersion: 2.0,
    apiUrl: 'http://www.vouchers.com'
});
app.constant("appName", "Voucher App"); 

var ctrl = function ($scope, appName, password, jsonConfig) {

    $scope.vouchers = [
        { ID: 1, Date: '01.01.2016', Amount: 100, Text: 'Schreibwaren', Paid: false },
        { ID: 2, Date: '02.01.2016', Amount: 56, Text: 'Diesel', Paid: false },
        { ID: 3, Date: '02.01.2016', Amount: 1267, Text: 'Laptop', Paid: true }];

    $scope.Password = password;
    $scope.ApplicationName = appName;
    $scope.Config = angular.fromJson(jsonConfig);
}

ctrl.$inject = ['$scope', 'appName', 'password', 'JsonConfig'];
app.controller('valueController', ctrl );
