var module = angular.module('app');

module.controller('BudgetCtrl', function($scope, BudgetSvc) {
    $scope.newBudget = function() {
        if ($scope.budgetForm.$valid) {
            console.log('form is valid');
        } else {
            console.log('form is invalid');
        };

        var newBudget = JSON.stringify({
            state: parseFloat($scope.budget.state),
            date: $scope.budget.date
        });

        console.log(newBudget);
        BudgetSvc.create(newBudget).success(function(budget) {
            $scope.budget = null;
            console.log(budget);
        }).error(function(error) {
            console.log(error);
        });
    };
});
