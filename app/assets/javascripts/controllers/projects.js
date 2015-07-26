portfolioApp.controller('projectsCtrl', ['$scope', 'Projects', function($scope, Projects) {
  var loadDelay = 4000;

  var init = function() {
    $scope.pageLoaded = false;
    getProjects();
  };

  var getProjects = function() {
    Projects.query(function(data) {
      $scope.projects = data;
      $scope.emptyBoxes = new Array(calcEmptyBoxes(data.length));

      setTimeout(function(){
        $scope.$apply(function() {
          $scope.pageLoaded = true;
        });
      }, loadDelay);
    });
  };

  var calcEmptyBoxes = function(length) {
    var cols = 4;
    var remainder = length % cols;
    return cols - remainder;
  };

  init();
}]);
