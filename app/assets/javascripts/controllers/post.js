portfolioApp.controller('postsShowCtrl', ['$scope', 'Posts', function($scope, Posts) {

  var init = function() {
    getPosts();
  };

  var getPosts = function() {
    var slug = angular.element('.posts-show').data('slug');

    Posts.get({ slug: slug }, function(data) {
      $scope.post = data;
    });
  };

  init();
}]);
