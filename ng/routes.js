//Routing definiowanie trasy dla stron
//definicja widokow oraz odpowiadajace im kontrolery
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
            });
    });
