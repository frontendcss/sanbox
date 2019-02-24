module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			less: {
				options: {
					compress: true
				},
				build: {
					files: {
						'css/all.min.css': 'less/*.less'
					}
				}
			},
			watch: {
					style: {
						files: ['less/*.less'],
						tasks: ['less']
				}
			}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['less']);

};
