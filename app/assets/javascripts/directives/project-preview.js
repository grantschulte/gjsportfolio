portfolioApp.directive('projectCard', [function() {
  return {
    restrict: 'A',
    link: function(scope, el) {
      var projectBox = $(el);
      var previewBox = projectBox.find('.preview');

      var config = {
        animLength: 400,
        animEasing: 'easeOutQuint'
      }

      projectBox.hover(function() {
        previewBox.animate({
          'top': '0'
        }, config.animLength, config.animEasing);
      }, function() {
        previewBox.animate({
          'top': '-100%'
        }, config.animLength, config.animEasing);
      });
    }
  };
}]);
