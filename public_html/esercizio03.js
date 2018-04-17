var app = angular.module('miaApp', []);
app.controller('mioController', function ($scope) {
    $scope.orologio = {};
    var aggiornaOra = function () {
        $scope.orologio.ora = new Date();
    };
    aggiornaOra();
});

