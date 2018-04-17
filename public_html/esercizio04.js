var app = angular.module('miaApp', []);
app.controller('PrimoController', function ($scope) {
    $scope.contatore = 0;
    $scope.aggiungi = x => $scope.contatore += x;
});

