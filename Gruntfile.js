/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    composer: {
      options: {
        composerLocation: '/home/tamayo/bin/composer' 
      },
      wordpress: {}
    },
    clean: [
      'public/wp/wp-content/plugins/hello.php',
      'public/wp/wp-content/themes/twentyten',
      'public/wp/wp-content/themes/twentyeleven',
      'public/wp/wp-content/themes/twentytwelve',
      'public/wp/wp-content/themes/twentythirteen',
      'public/wp/wp-content/themes/twentyfourteen'
    ]
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-composer');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['composer:wordpress:install', 'clean']);
};
