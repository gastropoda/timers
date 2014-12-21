module.exports = function(grunt) {
  grunt.initConfig({
    'download-atom-shell': {
      version: '0.20.1',
      outputDir: 'dist'
    }
  });
  grunt.loadNpmTasks("grunt-download-atom-shell");
};
