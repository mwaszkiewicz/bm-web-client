angular.module('app')
    .service('TransactionsSvc', function($http) {
        this.fetch = function() {
            return $http.get("http://localhost:3000/api/transactions");
        }
        this.create = function(transaction) {
            return $http.post("http://localhost:3000/api/transaction", transaction, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    });
