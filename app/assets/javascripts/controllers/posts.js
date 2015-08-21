portfolioApp.controller('postsIndexCtrl', ['$scope', 'Posts', function($scope, Posts) {

  var init = function() {
    $scope.posts      = [];
    $scope.offset     = 0;
    $scope.limit      = 5;
    $scope.loadDelay  = 2000;
    $scope.postCount  = $('.more').data('total-posts');
    $scope.pageLoaded = false;
    getPosts();
  };

  var getPosts = function() {
    Posts.query({
      offset: $scope.offset,
      limit:  $scope.limit
    }, function(data) {
      angular.forEach(data, function(post) {
        $scope.posts.push(post);
      });

      setTimeout(function() {
        $scope.$apply(function() {
          $scope.pageLoaded = true;
        });
      }, $scope.loadDelay);
    });
  };

  $scope.getMoreArticles = function() {
    $scope.offset = $scope.offset + $scope.limit;
    getPosts();
  };

  init();
}]);
