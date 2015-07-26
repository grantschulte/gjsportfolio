portfolioApp.controller('projectsCtrl', ['$scope', 'Projects', function($scope, Projects) {

  var init = function() {
    console.log('ok');
    getProjects();
  };

  var getProjects = function() {
    Projects.query(function(data) {
      $scope.projects = data;
      console.log(data);
    });
  };

  init();
}]);
