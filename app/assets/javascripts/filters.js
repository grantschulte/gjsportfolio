portfolioApp.filter('concatenate', function() {
  return function(input, separator, limit) {
    var words  = input.split(' ');
    var length = words.length;

    words = words.slice(0, limit);
    words = words.join(' ');

    if (length <= limit) {
      return words;
    }

    return words + ' ' + separator;
  };
});
