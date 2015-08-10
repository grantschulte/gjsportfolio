portfolioApp.directive('sideMenu', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, el) {
      var trigger = $('.menu-trigger');
      var menu = $('.main-menu');
      var menuOn = false;

      trigger.on('click', function() {
        if (menuOn) {
          menu.removeClass('on');
          menuOn = false;
        }
        else if (!menuOn) {
          menu.addClass('on');
          menuOn = true;
        }
      });

      $rootScope.$on('menuOff', function() {
        menuOn = false;
        menu.removeClass('on');
      });
    }
  };
}]);
