module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bower: {
      target: {
        rjsConfig: 'js/config.js',
        options: {
          transitive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-requirejs');
};
