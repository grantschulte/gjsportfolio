portfolioApp.directive('headerShrink', [function(){
  return {
    restrict: 'A',
    link: function() {
      var win      = $(window);
      var headerEl = $('header');
      var heading  = headerEl.find('h1');
      var drawer   = headerEl.find('.menu-trigger');

      var config = {
        triggerDistance:  headerEl.height(),
        originalHeight:   headerEl.height(),
        lineHeight:       headerEl.css('line-height'),
        shrunkHeight:     '50px',
        shrunkLineHeight: '50px',
        animLength:       300,
        animEasing:       'easeOutQuint'
      };

      var isShrunk = false;

      win.on('scroll', function() {
        var fromTop = win.scrollTop();

        if (fromTop >= config.triggerDistance && isShrunk === false) {
          shrinkHeader();
        }
        else if (fromTop < config.triggerDistance && isShrunk === true) {
          growHeader();
        }
      });

      var shrinkHeader = function() {
        isShrunk = true;

        headerEl.animate({
          'height': config.shrunkHeight,
          'line-height': config.shrunkLineHeight
        }, config.animLength, config.animEasing);

        heading.animate({
          'line-height': config.shrunkLineHeight
        }, config.animLength, config.animEasing);

        drawer.animate({
          'line-height': config.shrunkLineHeight
        }, config.animLength, config.animEasing);
      };

      var growHeader = function() {
        isShrunk = false;

        headerEl.animate({
          'height': config.originalHeight,
          'line-height': config.lineHeight
        }, config.animLength, config.animEasing);

        heading.animate({
          'line-height': config.lineHeight
        }, config.animLength, config.animEasing);

        drawer.animate({
          'line-height': config.lineHeight
        }, config.animLength, config.animEasing);
      };
    }
  };
}]);
