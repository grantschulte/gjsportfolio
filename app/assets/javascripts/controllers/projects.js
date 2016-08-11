portfolioApp.controller('projectsCtrl', ['$scope', 'Projects', function($scope, Projects) {
  var defaults = {
    limit: 20,
    offset: 0,
    loadDelay: 4000
  };

  var init = function() {
    $scope.pageLoaded = false;
    $scope.limit  = defaults.limit;
    $scope.offset = defaults.offset;
    getProjects();
  };

  var getProjects = function() {
    Projects.query({ limit: $scope.limit, offset: $scope.offset }, function(data) {
      $scope.projects = data;
      $scope.emptyBoxes = new Array(calcEmptyBoxes(data.length));
      
      console.log(data);

      setTimeout(function(){
        $scope.$apply(function() {
          $scope.pageLoaded = true;
        });

        fadeProjectsIn();
      }, defaults.loadDelay);
    });
  };

  var calcEmptyBoxes = function(length) {
    var cols = 4;
    var remainder = length % cols;
    return cols - remainder;
  };

  var fadeProjectsIn = function() {
    var cards = $('.project-card');
    var time = 0;

    cards.each(function() {
      var self = this;
      time += 200;

      setTimeout(function() {
        $(self).addClass('in');
      }, time);
    });
  };

  init();
}]);
