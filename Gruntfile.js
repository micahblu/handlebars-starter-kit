module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      compile: {
        options: {
          namespace: function(filename) {
            var name = filename.replace(/.+\/(.+)\.hbs/, '$1');
            return "App.Templates." + name;
          },
          processName: function(filePath) {
            return 'template';
          }
        },
        files: {
          'src/assets/js/templates.js': 'src/assets/js/templates/**/*.hbs'
        }
      }
    },

    concat: {
      build:{
        src: ['src/assets/js/templates.js', 'src/assets/js/init.js' ],
        dest: 'src/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/assets/js/<%= pkg.name %>.min.js'
      }
    },

    watch: {
      scripts: {
        files: 'src/assets/js/**/*.js',
        tasks: ['handlebars', 'concat', 'uglify'],
        options: {
          interrupt: true,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['handlebars', 'concat', 'uglify', 'watch']);

};