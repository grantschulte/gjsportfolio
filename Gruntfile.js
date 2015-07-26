'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      js: {
        files: '<%= jshint.all %>',
        tasks: ['jshint']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true
      },
      all: [
        'Gruntfile.js',
        'app/assets/javascripts/**/*.js'
      ]
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'app/assets/images/',
          src: 'app/assets/**/*',
          dest: 'app/assets/images/build'
        }]
      }
    }
  });

  // grunt.registerTask('watch', [
  //   'jshint'
  // ]);
  //
  // grunt.registerTask('imagemin', [
  //   'imagemin'
  // ]);
};
