module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {

      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 1 version']}),
          require('cssnext')(),
          require('precss')()
        ]
      },
      dist: {
        src: 'src/style.css',
        dest: 'dest/style.css'
      }

    }
 
  });

  grunt.loadNpmTasks('grunt-postcss');

};