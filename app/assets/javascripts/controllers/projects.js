portfolioApp.controller('projectsCtrl', ['$scope', 'Projects', function($scope, Projects) {

  var init = function() {
    getProjects();
  };

  var getProjects = function() {
    Projects.query(function(data) {
      $scope.projects = data;
      $scope.emptyBoxes = new Array(calcEmptyBoxes(data.length));
    });
  };

  var calcEmptyBoxes = function(length) {
    var cols = 4;
    var remainder = length % cols;
    return cols - remainder;
  };

  init();
}]);
