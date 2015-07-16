module.exports = function(grunt) {
	grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */',
		// grunt react plugin
		// https://www.npmjs.com/package/grunt-react#options-sourcemap
		// using react grunt we can transform all .jsx to corresponding .js in order to we can know about the 
		// react nature principle, learn purpose.
		react: {
			// single_file_output: {
			// 	files: {
			// 		'path/to/output/dir/output.js': 'path/to/jsx/templates/dir/input.jsx'
			// 	}
			// },
			// combined_file_output: {
			// 	files: {
			// 		'path/to/output/dir/combined.js': [
			// 			'path/to/jsx/templates/dir/input1.jsx',
			// 			'path/to/jsx/templates/dir/input2.jsx'
			// 		]
			// 	}
			// },
			options: {
				// sourceMap: true
			},
			dynamic_mappings: {
				files: [{
					expand: true,
					cwd: './',
					src: ['react/**/*.jsx'],
					dest: 'public/js/reactify/',
					ext: '.js',
					extDot: 'last'
				}]
			}
		},
		watch: {
			react: {
				files: ['react/**/*.jsx', 'actions/*.js', 'stores/**/*.js'],
				tasks: ['browserify']
			}
		},
		uglify: {
			//document: https://www.npmjs.com/package/grunt-contrib-uglify
			options: {
				banner: "<%= banner%>",

				compress: {
					// maybe in our js code: 
					// if we set global_defs.DEBUG==false, it will ignore console.log("xxxxx")
					// if(DEBUG) {
					//     console.log("xxxx")
					// }
					global_defs: {
						"DEBUG": false
					},
					dead_code: true
				}
			},
            // uglify task configuration goes here.
            // the named <core> `target`
            build: {
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: './public/js/browserify', // Src matches are relative to this path.
                    src: ['**/*.js'], // Actual pattern(s) to match.
                    dest: 'public/js/browserify', // Destination path prefix.
                    ext: '.js', // Dest filepaths will have this extension.
                    extDot: 'first' // Extensions in filenames begin after the first dot
                }]
            }
		},
		// using browerify automatically combined all jsx and js file to boudle.js with sourceMap in debug mode.
		browserify: {
			options: {
				browserifyOptions: {
					debug: true
				},
				transform: [require('grunt-react').browserify]
			},
            // for debug
			client_debug: {
				src: ['react/**/*.jsx'],
				dest: 'public/js/browserify/bundle.js'
			},
            // for release
			client_prod: {
				options: {
					browserifyOptions: {
						debug: false
					}
				},
				src: ['react/**/*.jsx'],
				dest: 'public/js/browserify/bundle.js'
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
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'browserify:client_debug'
	]);
	grunt.registerTask('prod', [
		'browserify:client_prod',"uglify"
	]);
};