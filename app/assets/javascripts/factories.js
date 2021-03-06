/*
// Factories
*/

portfolioApp.factory('Projects', ['$resource', function($resource) {
  return $resource('/projects/:id.json', { id: '@id' }, {
    'get': {
      method: 'GET',
      isArray: false
    },
    'query': {
      method: 'GET',
      isArray: true
    }
  });
}]);

portfolioApp.factory('Posts', ['$resource', function($resource) {
  return $resource('/posts/:slug.json', { slug: '@slug' }, {
    'get': {
      method: 'GET',
      isArray: false
    },
    'query': {
      method: 'GET',
      isArray: true
    }
  });
}]);
