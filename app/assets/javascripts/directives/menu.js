portfolioApp.directive('sideMenu', [function(){
  return {
    restrict: 'A',
    link: function(scope, el) {
      console.log('yo');
    }
  };
}]);
