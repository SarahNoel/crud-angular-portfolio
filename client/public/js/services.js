app.factory('PortfolioService', function(){
  var PortfolioService = {};

  PortfolioService.getAll = function($scope, $http){
    $http.get('/api/v1/projects')
    .then(function(data) {
      $scope.projectData = data.data;
    });
  };

  PortfolioService.getOne= function($scope, $http, id){
    $scope.edit = true;
    $scope.hide = true;
    $scope.groupProj = true;
    $http.get('/api/v1/project/' + id)
    .then(function(data) {
      var project= data.data;
      $scope.name = project.name;
      $scope.description= project.description;
      $scope.tags = project.tags;
      $scope.group = project.group;
      $scope.group_members = project.group_members;
      $scope.id = project._id;
      $scope.url = project.url;
    });
  };

  PortfolioService.addOne = function($scope, $http){
    if($scope.group_members === undefined){
      $scope.group_members = 'N/A';
    }
    if($scope.url === undefined){
      $scope.url = 'https://github.com/SarahNoel';
    }
    var payload = {
      name: $scope.name,
      description: $scope.description,
      tags: $scope.tags,
      group: $scope.group,
      group_members: $scope.group_members,
      url: $scope.url
    };
    $http.post('/api/v1/projects/', payload)
    .then(function(data) {
      PortfolioService.getAll($scope, $http);
      $scope.hide = false;
      $scope.name = $scope.description = $scope.tags = $scope.group = $scope.group_members = ('');
    });
    $scope.edit=false;
  };

  PortfolioService.updateOne= function($scope, $http, place){
    if($scope.group_members === undefined){
      $scope.group_members = '';
    }
    if($scope.url === undefined){
      $scope.url = 'https://github.com/SarahNoel';
    }
    $scope.edit = false;
    $scope.hide = false;
    $scope.groupProj = false;
    var payload = {
      name: $scope.name,
      description: $scope.description,
      tags: $scope.tags,
      group: $scope.group,
      group_members: $scope.group_members,
      url: $scope.url
    };
    $http.put('/api/v1/project/'+place.id, payload)
    .then(function(data){
      $scope.name = $scope.description = $scope.tags = $scope.group = $scope.group_members = ('');
      PortfolioService.getAll($scope, $http);
    });
  };

  PortfolioService.deleteOne = function($scope, $http, id){
    console.log(id);
    $http.delete('/api/v1/project/'+id)
    .then(function(data){
    PortfolioService.getAll($scope, $http);
    });
  };

return PortfolioService;
});
