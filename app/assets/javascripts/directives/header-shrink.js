portfolioApp.directive('headerShrink', [function(){
  return {
    restrict: 'A',
    link: function() {
      var win      = $(window);
      var headerEl = $('header');
      var heading  = headerEl.find('h1');
      var drawer   = headerEl.find('.menu-trigger');

      var config = {
        triggerDistance:       headerEl.height(),
        originalHeight:        headerEl.height(),
        originalLineHeight:    headerEl.css('line-height'),
        shrunkHeight:          '50px',
        shrunkLineHeight:      '50px',
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

        if (action === 'shrink') {
          isShrunk = true;
          height     = config.shrunkHeight;
          lineHeight = config.shrunkLineHeight;
        }
        else if (action === 'grow') {
          isShrunk = false;
          height     = config.originalHeight;
          lineHeight = config.originalLineHeight;
        }

        headerEl.animate({
          'height': height,
          'line-height': lineHeight
        }, config.animLength, config.animEasing);

        heading.animate({
          'line-height': lineHeight
        }, config.animLength, config.animEasing);

        drawer.animate({
          'line-height': lineHeight
        }, config.animLength, config.animEasing);
      };
    }
  };
}]);
