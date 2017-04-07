var app = angular.module("popupApp", ["ngDialog"]);

app.controller("popupCtrl", function ($scope, ngDialog) {
    $scope.Books = [
        {
            "Title": "A day in the country",
            "href": "country.html"
        },
        {
            "Title": "A night in Cambodia",
            "href": "country.html"
        }
    ];

    $scope.showBook = function (index) {
        $scope.selectedBook = $scope.Books[index];
        ngDialog.open({ template: "book.html" });
    };
});