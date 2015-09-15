/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    composer: {
      options: {
        composerLocation: '/home/tamayo/bin/composer' 
      },
      wordpress: {}
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-composer');

  // Default task.
  grunt.registerTask('default', ['composer:wordpress:install']);
};
