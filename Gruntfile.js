module.exports = function(grunt) {

	// var banner = [
	//     '/**',
	//     ' * <%= pkg.name %> <%= pkg.version %>',
	//     ' * <%= pkg.homepage %>',
	//     ' * Copyright (c) 2013 Luiz de Prá (AKA RawArkanis) http://luizdepra.com.br',
	//     ' * <%= pkg.description %>',
	//     ' * built on: ' + new Date(),
	//     ' */',
	//     ''
	// ].join("\n");

	//
	// reference: grunt-react/Gruntfile.js
	// https://github.com/jmreidy/grunt-browserify
	// http://javascript.ruanyifeng.com/tool/browserify.html
	// http://javascript.ruanyifeng.com/tool/grunt.html
	// -------------------------------------------------------------------
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		banner: '/*! <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */',

		// The module configurations.
		_modules: {
			// the current working directory related Gruntfile.js.
			cwd: './',

			// the default transform react jsx source files related Gruntfile.js.
			reactJsx: './react/**/*.jsx',

			// the transformed jsx destination directory for all corresponding related Gruntfile.js
			reactifyDestDir: './public/js/reactify',

			// the bundled destination directory.
			bundleDestDir: './public/js/browserify',

			vendorDestDir: './public/js/vendor',

			// used to build external libaray code e.g. react, reflux.
			// and exclude from default project module.
			externalDestDir: './public/js/vendor'

		},

		eslint: {
			//http://eslint.org/docs/rules/
			//https://www.npmjs.com/package/grunt-eslint
			options: {
				configFile: '.eslintrc'
					// outputFile:''
					// format: require('eslint-tap')
			},
			react: [
				// 'Gruntfile.js',
				'<%= _modules.reactJsx %>',
				'./stores/**/*.js',
				'./actions/**/*.js'
			]
		},
		// grunt react plugin
		// https://www.npmjs.com/package/grunt-react#options-sourcemap
		// using react grunt we can transform all .jsx to corresponding .js in order to we can know about the
		// react nature principle, learn purpose.
		react: {
			options: {
				sourceMap: true
			},
			dynamicMappings: {
				files: [{
					expand: true,
					cwd: '<%= _modules.cwd %>',
					src: ['<%= _modules.reactJsx %>'],
					dest: '<%= _modules.reactifyDestDir %>',
					ext: '.js',
					extDot: 'last'
				}]
			}
		},
		watch: {
			react: {
				files: ['<%= _modules.reactJsx %>', 'actions/*.js', 'stores/**/*.js'],
				tasks: ['browserify:client_debug']
			}
		},
		uglify: {
			//document: https://www.npmjs.com/package/grunt-contrib-uglify
			options: {
				banner: '<%= banner%>',

				compress: {
					// maybe in our js code:
					// if we set global_defs.DEBUG==false, it will ignore console.log("xxxxx")
					// if(DEBUG) {
					//     console.log("xxxx")
					// }
					global_defs: {
						'DEBUG': false
					},
					dead_code: true
				}
			},
			// uglify task configuration goes here.
			// the named <core> `target`
			prodBuild: {
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: '<%= _modules.vendorDestDir %>', // Src matches are relative to this path.
					src: 'vendor.js', // Actual pattern(s) to match.
					dest: '<%= _modules.vendorDestDir %>', // Destination path prefix.
					ext: '.min.js', // Dest filepaths will have this extension.
					extDot: 'first' // Extensions in filenames begin after the first dot
				}, {
					expand: true, // Enable dynamic expansion.
					cwd: '<%= _modules.bundleDestDir %>', // Src matches are relative to this path.
					src: 'bundle.js', // Actual pattern(s) to match.
					dest: '<%= _modules.bundleDestDir %>', // Destination path prefix.
					ext: '.min.js', // Dest filepaths will have this extension.
					extDot: 'first' // Extensions in filenames begin after the first dot
				}]
			}
		},
		// using browerify automatically combined all jsx and js file to boudle.js with sourceMap in debug mode.
		browserify: {
			// Cause of we don't want to build react,reflux libaray to bundle.js
			// using `external` to ignore it.
			'vendor': {
				options: {
					require: ['react', 'reflux']
				},
				src: [],
				dest: '<%= _modules.externalDestDir %>/vendor.js'
			},
			// for debug mode using reactify plugin
			'clientDebug': {
				options: {
					// excluded react, reflux dependancy while compile phase.
					external: ['react', 'reflux'],

					browserifyOptions: {
						debug: true
					},
					transform: [
						['reactify', {
							'es6': true
						}]
					]
				},
				files: {
					'<%= _modules.bundleDestDir %>/bundle.js': ['<%= _modules.reactJsx %>'],
				}
			},
			// for release
			'clientProd': {
				options: {
					// excluded react, reflux dependancy while compile phase.
					external: ['react', 'reflux'],

					transform: [require('grunt-react').browserify]
				},
				src: ['<%= _modules.reactJsx %>'],
				dest: '<%= _modules.bundleDestDir %>/bundle.js'
			}
		},
		// start node server and watch the changes of js,jsx,html,ejs
		nodemon: {
			dev: {
				script: 'bin/www',
				options: {
					ext: 'js,jsx,html,ejs'
				}
			}
		}
	});


	// grunt.loadNpmTasks('grunt-react');
	// grunt.loadNpmTasks('grunt-browserify');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-nodemon');
	// We load grunt tasks listed in package.json file
	// require('load-grunt-tasks')(grunt);
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'eslint', 'browserify:vendor', 'browserify:clientDebug'
	]);
	grunt.registerTask('prod', [
		'browserify:vendor', 'browserify:clientProd', 'uglify'
	]);
};