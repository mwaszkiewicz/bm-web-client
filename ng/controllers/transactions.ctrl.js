var app = angular.module('app');

app.controller('TransactionsCtrl', function($scope, TransactionsSvc) {

    TransactionsSvc.fetch().success(function(data) {
        console.log(JSON.stringify(data));
        $scope.transactions = data;
    }).error(function(error) {
        console.log(JSON.stringify(error));
    });
});
