portfolioApp.controller('postsShowCtrl', ['$scope', 'Posts', function($scope, Posts) {

  var init = function() {
    getPosts();
  };

  var getPosts = function() {
    var id = angular.element('.posts-show').data('id');

    Posts.get({ id: id }, function(data) {
      $scope.post = data;
      console.log(data);
    });
  };

  init();
}]);
