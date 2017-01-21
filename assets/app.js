angular.module("app",["ngRoute","ngMessages"]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"StartCtrl",templateUrl:"start.html"}).when("/transaction",{controller:"TransactionCtrl",templateUrl:"transaction.html"}).when("/transactions",{controller:"TransactionsCtrl",templateUrl:"transactions.html"})}]),angular.module("app").controller("StartCtrl",["$scope",function(t){}]);var module=angular.module("app");module.controller("TransactionCtrl",["$scope","TransactionsSvc",function(t,n){t.newTransaction=function(){t.transactionForm.$valid?console.log("form is valid"):console.log("form is invalid");var o=JSON.stringify({amount:parseFloat(t.transaction.amount),type:t.transaction.type,description:t.transaction.description,date:t.transaction.date});console.log(o),n.create(o).success(function(n){t.transaction=null,console.log(n)}).error(function(t){console.log(t)})}}]),angular.module("app").service("TransactionsSvc",["$http",function(t){this.fetch=function(){return t.get("http://localhost:3000/api/transactions")},this.create=function(n){return t.post("http://localhost:3000/api/transaction",n,{headers:{"Content-Type":"application/json"}})}}]);var app=angular.module("app");app.controller("TransactionsCtrl",["$scope","TransactionsSvc",function(t,n){n.fetch().success(function(n){console.log(JSON.stringify(n)),t.transactions=n}).error(function(t){console.log(JSON.stringify(t))})}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInJvdXRlcy5qcyIsInN0YXJ0LmN0cmwuanMiLCJ0cmFuc2FjdGlvbi5jdHJsLmpzIiwidHJhbnNhY3Rpb24uc3ZjLmpzIiwidHJhbnNhY3Rpb25zLmN0cmwuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsImNvbnRyb2xsZXIiLCJ0ZW1wbGF0ZVVybCIsIiRzY29wZSIsIlRyYW5zYWN0aW9uc1N2YyIsIm5ld1RyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25Gb3JtIiwiJHZhbGlkIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwidHJhbnNhY3Rpb24iLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiY3JlYXRlIiwic3VjY2VzcyIsImVycm9yIiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImZldGNoIiwiZ2V0IiwicG9zdCIsImhlYWRlcnMiLCJDb250ZW50LVR5cGUiLCJhcHAiLCJkYXRhIiwidHJhbnNhY3Rpb25zIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUUMsT0FBTyxPQUNYLFVBQVcsZUNDZkQsUUFBUUMsT0FBTyxPQUNWQyxRQUFBLGlCQUFPLFNBQVNDLEdBQ2JBLEVBQ0tDLEtBQUssS0FDRkMsV0FBWSxZQUNaQyxZQUFhLGVBRWhCRixLQUFLLGdCQUNGQyxXQUFZLGtCQUNaQyxZQUFhLHFCQUVoQkYsS0FBSyxpQkFDRkMsV0FBWSxtQkFDWkMsWUFBYSx5QkNmN0JOLFFBQVFDLE9BQU8sT0FDVkksV0FBVyxhQUFBLFNBQWEsU0FBU0UsTUNEdEMsSUFBSU4sUUFBU0QsUUFBUUMsT0FBTyxNQUU1QkEsUUFBT0ksV0FBVyxtQkFBQSxTQUFBLGtCQUFtQixTQUFTRSxFQUFRQyxHQUNsREQsRUFBT0UsZUFBaUIsV0FDaEJGLEVBQU9HLGdCQUFnQkMsT0FDdkJDLFFBQVFDLElBQUksaUJBRVpELFFBQVFDLElBQUksa0JBR2hCLElBQUlKLEdBQWlCSyxLQUFLQyxXQUN0QkMsT0FBUUMsV0FBV1YsRUFBT1csWUFBWUYsUUFDdENHLEtBQU1aLEVBQU9XLFlBQVlDLEtBQ3pCQyxZQUFhYixFQUFPVyxZQUFZRSxZQUNoQ0MsS0FBTWQsRUFBT1csWUFBWUcsTUFHN0JULFNBQVFDLElBQUlKLEdBQ1pELEVBQWdCYyxPQUFPYixHQUFnQmMsUUFBUSxTQUFTTCxHQUNwRFgsRUFBT1csWUFBYyxLQUNyQk4sUUFBUUMsSUFBSUssS0FDYk0sTUFBTSxTQUFTQSxHQUNkWixRQUFRQyxJQUFJVyxTQ3RCeEJ4QixRQUFRQyxPQUFPLE9BQ1Z3QixRQUFRLG1CQUFBLFFBQW1CLFNBQVNDLEdBQ2pDQyxLQUFLQyxNQUFRLFdBQ1QsTUFBT0YsR0FBTUcsSUFBSSwyQ0FFckJGLEtBQUtMLE9BQVMsU0FBU0osR0FDbkIsTUFBT1EsR0FBTUksS0FBSyx3Q0FBeUNaLEdBQ3ZEYSxTQUNJQyxlQUFnQix5QkNScEMsSUFBSUMsS0FBTWpDLFFBQVFDLE9BQU8sTUFFekJnQyxLQUFJNUIsV0FBVyxvQkFBQSxTQUFBLGtCQUFvQixTQUFTRSxFQUFRQyxHQUVoREEsRUFBZ0JvQixRQUFRTCxRQUFRLFNBQVNXLEdBQ3JDdEIsUUFBUUMsSUFBSUMsS0FBS0MsVUFBVW1CLElBQzNCM0IsRUFBTzRCLGFBQWVELElBQ3ZCVixNQUFNLFNBQVNBLEdBQ2RaLFFBQVFDLElBQUlDLEtBQUtDLFVBQVVTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAnbmdSb3V0ZScsICduZ01lc3NhZ2VzJ1xyXG5dKTtcclxuIiwiLy9Sb3V0aW5nIGRlZmluaW93YW5pZSB0cmFzeSBkbGEgc3Ryb25cclxuLy9kZWZpbmljamEgd2lkb2tvdyBvcmF6IG9kcG93aWFkYWphY2UgaW0ga29udHJvbGVyeVxyXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgIC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgICAgICAud2hlbignLycsIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTdGFydEN0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzdGFydC5odG1sJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAud2hlbignL3RyYW5zYWN0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RyYW5zYWN0aW9uQ3RybCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RyYW5zYWN0aW9uLmh0bWwnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC53aGVuKCcvdHJhbnNhY3Rpb25zJywge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RyYW5zYWN0aW9uc0N0cmwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0cmFuc2FjdGlvbnMuaHRtbCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29udHJvbGxlcignU3RhcnRDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7fSk7XHJcbiIsInZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XHJcblxyXG5tb2R1bGUuY29udHJvbGxlcignVHJhbnNhY3Rpb25DdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBUcmFuc2FjdGlvbnNTdmMpIHtcclxuICAgICRzY29wZS5uZXdUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUudHJhbnNhY3Rpb25Gb3JtLiR2YWxpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZm9ybSBpcyB2YWxpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JtIGlzIGludmFsaWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbmV3VHJhbnNhY3Rpb24gPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdCgkc2NvcGUudHJhbnNhY3Rpb24uYW1vdW50KSxcclxuICAgICAgICAgICAgdHlwZTogJHNjb3BlLnRyYW5zYWN0aW9uLnR5cGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAkc2NvcGUudHJhbnNhY3Rpb24uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGRhdGU6ICRzY29wZS50cmFuc2FjdGlvbi5kYXRlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUcmFuc2FjdGlvbik7XHJcbiAgICAgICAgVHJhbnNhY3Rpb25zU3ZjLmNyZWF0ZShuZXdUcmFuc2FjdGlvbikuc3VjY2VzcyhmdW5jdGlvbih0cmFuc2FjdGlvbikge1xyXG4gICAgICAgICAgICAkc2NvcGUudHJhbnNhY3Rpb24gPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbik7XHJcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgLnNlcnZpY2UoJ1RyYW5zYWN0aW9uc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90cmFuc2FjdGlvbnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24odHJhbnNhY3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RyYW5zYWN0aW9uXCIsIHRyYW5zYWN0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdUcmFuc2FjdGlvbnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBUcmFuc2FjdGlvbnNTdmMpIHtcclxuXHJcbiAgICBUcmFuc2FjdGlvbnNTdmMuZmV0Y2goKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgJHNjb3BlLnRyYW5zYWN0aW9ucyA9IGRhdGE7XHJcbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==