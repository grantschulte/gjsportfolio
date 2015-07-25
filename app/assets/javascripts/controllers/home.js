portfolioApp.controller('homeCtrl', ['$scope', 'Posts', function($scope, Posts) {

  var init = function() {
    getPosts();
  };

  var getPosts = function() {
    Posts.get(function(data) {
      $scope.posts = data;
    });
  };

  init();
}]);
