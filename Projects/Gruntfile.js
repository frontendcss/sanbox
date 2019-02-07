module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			 development: {
					options: {
						paths: ['css/']
					},
					files: {
						'css/result.css': 'less/*.less'
					}
				}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'result/',
					ext: '.min.css'
				}]
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Default task(s).
	grunt.registerTask('default', ['less', 'cssmin']);

};
