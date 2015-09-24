app.factory('PortfolioService', function(){
  var PortfolioService = {};

  PortfolioService.getAll = function($scope, $http){
    $http.get('/api/v1/projects')
    .then(function(data) {
      $scope.projectData = data.data;
    });
  };

  PortfolioService.getOne = function($scope, $http, id){
    $http.get('/api/v1/project/' + id)
    .then(function(data) {
      $scope.oneProject = data.data;
    });
  };

  PortfolioService.addOne = function($scope, $http){
    var payload = {
      name: $scope.name,
      description: $scope.description,
      tags: $scope.tags,
      group: $scope.group,
      group_members: $scope.group_members
    };
    $http.post('/api/v1/projects/', payload)
    .then(function(data) {
      $scope.newProject = data.data;
      PortfolioService.getAll($scope, $http);
      $scope.hide = false;
    });
  };



return PortfolioService;
});
