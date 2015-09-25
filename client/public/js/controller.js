app.controller('MainController',['$scope', '$http', 'PortfolioService', function($scope, $http, PortfolioService) {
  $scope.title = "Welcome!";
  $scope.message = "This is the home page.";
  $scope.addOne = function(){
    PortfolioService.addOne($scope, $http);
  };
  $scope.getOne = function(id){
    PortfolioService.getOne($scope, $http, id);
  };
  $scope.updateOne = function(){
    PortfolioService.updateOne($scope, $http, this);
  };
  $scope.deleteOne = function(){
    PortfolioService.deleteOne($scope, $http, this);
  };

  PortfolioService.getAll($scope, $http);

}]);
