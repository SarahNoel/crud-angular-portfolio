app.controller('MainController',['$scope', '$http', 'PortfolioService', function($scope, $http, PortfolioService) {
  $scope.title = "Welcome!";
  $scope.message = "This is the home page.";
  $scope.addOne = function(){
    PortfolioService.addOne($scope, $http);
  };

  PortfolioService.getAll($scope, $http);

}]);
