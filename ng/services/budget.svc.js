angular.module('app')
    .service('BudgetSvc', function($http) {
        this.fetch = function() {
            return $http.get("http://localhost:3000/api/budgets");
        }
        this.create = function(budget) {
            return $http.post("http://localhost:3000/api/budget", budget, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    });
