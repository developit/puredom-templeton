module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			main : {
				options: {
					banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
				},
				files: {
					'puredom-templeton.min.js': [
						'puredom-templeton.js'
					]
				}
			}
		},

		jshint : {
			options : {
				'browser' : true
			},
			main : {
				options : {
					'-W041' : true,
					'-W030' : true
				},
				src : ['puredom-templeton.js']
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [
		'build'
	]);
	
	grunt.registerTask('build', [
		'jshint:main',
		'uglify:main'
	]);

};
