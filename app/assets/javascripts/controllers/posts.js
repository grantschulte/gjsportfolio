portfolioApp.controller('postsIndexCtrl', ['$scope', 'Posts', function($scope, Posts) {

  var init = function() {
    getPosts();
  };

  var getPosts = function() {
    Posts.query(function(data) {
      $scope.posts = data;
    });
  };

  init();
}]);
