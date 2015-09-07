portfolioApp.controller('postsShowCtrl', ['$scope', 'Posts', '$sce', function($scope, Posts, $sce) {

  var init = function() {
    getPosts();
  };

  var getPosts = function() {
    var slug = angular.element('.posts-show').data('slug');

    Posts.get({ slug: slug }, function(data) {
      $scope.post = data;
      $scope.post.content = $sce.trustAsHtml(data.content);
    });
  };

  init();
}]);
