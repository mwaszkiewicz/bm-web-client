var module = angular.module('app');

module.controller('TransactionCtrl', function($scope, TransactionsSvc) {
    $scope.newTransaction = function() {
        if ($scope.transactionForm.$valid) {
            console.log('form is valid');
        } else {
            console.log('form is invalid');
        };

        var newTransaction = JSON.stringify({
            amount: parseFloat($scope.transaction.amount),
            type: $scope.transaction.type,
            description: $scope.transaction.description,
            date: $scope.transaction.date,
        });

        console.log(newTransaction);
        TransactionsSvc.create(newTransaction).success(function(transaction) {
            $scope.transaction = null;
            console.log(transaction);
        }).error(function(error) {
            console.log(error);
        });
    };
});
