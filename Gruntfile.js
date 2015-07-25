'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      options: {
        livereload: false
      },
      css: {
        files: 'styles/scss/*.scss',
        tasks: ['compass']
      },
      js: {
        files: '<%= jshint.all %>',
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        files: [
          '*.html',
          '*.php',
          'styles/*.css',
          'images/**/*.{png,jpg,jpeg,gif,webp,svg}',
          'images/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'styles/scss',
          cssDir: 'styles',
          outputStyle: 'compressed',
          httpPath: '/',
          relativeAssets: true,
          specify: 'styles/scss/style.css.scss',
          force: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true
      },
      all: [
        'Gruntfile.js',
        'js/**/*.js',
        'js/*.js',
        '!js/build/*.js',
        '!js/ui/swiper.min.js'
      ]
    },

    uglify: {
      dist: {
        options: {
          mangle: false
        },
        files: {
          'js/build/daversa.min.js': [
            'js/ui/*.js'
          ],
          'js/build/app.min.js': [
            'js/angular/*.js',
            'js/angular/**/*.js'
          ],
          'js/build/modules.min.js': [
            'bower_components/**/*.min.js',
            '!bower_components/angular/*.js',
            '!bower_components/angular/*.min.js'
          ]
        }
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '**/*',
          dest: 'images/build'
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'jshint',
    'imagemin',
    'uglify'
  ]);
};
