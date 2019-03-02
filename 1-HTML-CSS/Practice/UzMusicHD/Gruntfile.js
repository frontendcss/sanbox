module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
		grunt.initConfig({
			less: {
				lessCss: {
					files: {
						'src/less/all.css': 'src/less/all.less'
					}
				}
			},
			postcss: {
				autostyle: {
					options: {
						processors: [
							require('pixrem')(),
							require('autoprefixer')({browsers: 'last 2 versions'})
						]
					},
					src: 'src/less/all.css'
				}
			},
			csso: {
				compress: {
					options: {
						report: 'gzip'
					},
					files: {
						'build/css/all.min.css': ['src/less/all.css']
					}
				}
			 },
			imagemin: {
				optimi: {
					options: {
						optimizationLevel: 3,
						progressive: true,
						svgoPlugins: [{removeViewBox: false}],
						cache: false
					},
					files: [{
						expand: true,
						cwd: 'src/img/',
						src: ['*.{png,jpg,svg}'],
						dest: "build/img/"
					}]
				}
			},
			cwebp: {
				dynamic: {
					options: {
						q: 90
					},
					files: [{
						expand: true,
						cwd: 'build/img/',
						src: ['*.{png,jpg}'],
						dest: 'build/webp/'
					}]
				}
			},
			svgstore: {
				options: {
					includeTitleElement: false
				},
				sprite: {
					files: {
						"build/svg/sprite.svg" : ["build/img/icon-*.svg"]
					}
				}
			},
			clean: {
				build: {
					src: ['build/img/icon-*.svg']
				}
			},
			browserSync: {
				Server: {
					bsFiles: {
							src : [
									'build/css/*.css',
									'build/*.html'
							]
					},
					options: {
							watchTask: true,
							server: 'build/'
					}
				}
			},
			watch: {
				style: {
					files: ['src/less/*.less'],
					tasks: ['less','postcss','csso'],
					options: {
						event: ['all']
					}
				}
			}
		});
	grunt.registerTask('stylestart', ['browserSync', 'watch']);
	grunt.registerTask('imgstart', ['imagemin', 'cwebp', 'svgstore','clean']);
};

