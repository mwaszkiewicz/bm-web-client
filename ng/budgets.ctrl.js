var app = angular.module('app');

app.controller('BudgetsCtrl', function($scope, BudgetSvc) {
    BudgetSvc.fetch().success(function(data) {
        console.log(JSON.stringify(data));
        $scope.budgets = data;
    }).error(function(error) {
        console.log(JSON.stringify(error));
    });
});
