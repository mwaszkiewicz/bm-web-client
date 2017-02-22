angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'StartCtrl',
                templateUrl: 'start.html'
            })
            .when('/transaction', {
                controller: 'TransactionCtrl',
                templateUrl: 'transaction.html'
            })
            .when('/transactions', {
                controller: 'TransactionsCtrl',
                templateUrl: 'transactions.html'
            })
            .when('/budget', {
                controller: 'BudgetCtrl',
                templateUrl: 'budget.html'
            })
            .when('/budgets', {
                controller: 'BudgetsCtrl',
                templateUrl: 'budgets.html'
            });
    });
