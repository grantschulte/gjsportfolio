portfolioApp.directive('headerShrink', ['$rootScope', function($rootScope){
  return {
    restrict: 'A',
    link: function() {
      var win      = $(window);
      var headerEl = $('header');
      var heading  = headerEl.find('h1');
      var drawer   = headerEl.find('.menu-trigger');
      var menu     = $('.main-menu');

      var config = {
        triggerDistance:       headerEl.height(),
        originalHeight:        headerEl.height(),
        originalLineHeight:    headerEl.css('line-height'),
        originalBorder:        headerEl.css('border-bottom'),
        shrunkBorder:          '1px solid #efefef',
        shrunkHeight:          50,
        shrunkLineHeight:      50,
        animLength:            300,
        animEasing:            'easeOutQuint'
      };

      var isShrunk = false;

      win.on('scroll', function() {
        var fromTop = win.scrollTop();

        if (fromTop >= config.triggerDistance && isShrunk === false) {
          animateHeader('shrink');
        }
        else if (fromTop < config.triggerDistance && isShrunk === true) {
          animateHeader('grow');
        }
      });

      var animateHeader = function(action) {
        var height;
        var lineHeight;
        var border;

        if (action === 'shrink') {
          isShrunk = true;
          height     = config.shrunkHeight;
          lineHeight = config.shrunkLineHeight;
          border     = config.shrunkBorder;
          $rootScope.$broadcast('menuOff');
        }
        else if (action === 'grow') {
          isShrunk = false;
          height     = config.originalHeight;
          lineHeight = config.originalLineHeight;
          border     = config.originalBorder;
        }

        headerEl.animate({
          'height': height,
          'line-height': lineHeight
        }, config.animLength, config.animEasing);

        headerEl.css({ 'border-bottom' : border });

        heading.animate({
          'line-height': lineHeight
        }, config.animLength, config.animEasing);

        drawer.animate({
          'line-height': lineHeight
        }, config.animLength, config.animEasing);

        menu.animate({
          'top': height + 20
        }, config.animLength, config.animEasing);
      };
    }
  };
}]);
