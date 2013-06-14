module.exports = function(grunt) {
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		watch : {
			files : ['sass/*.scss', 'index.html', 'js/*.js' ],
			tasks : ['sass:dev', 'autoprefixer:dev', 'concat', 'uglify', 'jshint']
		},
		
		sass : {
			dev : {
				files : {
					"assets/css/styles.css" : "sass/styles.scss"
				}		
			}
		},
		
		jshint : {
			all: ['Gruntfile.js', 'js/**/*.js']
		},
		
		concat : {
			options: {
				separator:';'
			},
			dist: {
				src:['js/**/*.js'],
				dest:'assets/scripts/script.js'
			}
		},
		
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist : {
				files : {
					'assets/scripts/script.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		
		compress: {
			main: {
				options: {
					mode: 'gzip'
				},
				expand: true,
				cwd: 'assets/',
				src: ['**/*'],
				dest: 'assets/'
			}
		},
		
		cssmin: {
			add_banner: {
				options: {
					banner: '/* My minified css file */'
				},
				files: {
					'assets/css/styles.min.css': ['assets/css/styles.css']
				}
			}
		},
		
		autoprefixer: {
			dev : {
				options: {
					browsers: ['last 2 version', 'ie 8', 'ie 7']
				},
				files: {
					'assets/css/styles.css':['assets/css/styles.css']
				}	
			}
		},
		
		clean: ["assets"],
		
		haml: {
			'ruby_html': {
				options: {
					language: 'ruby'
				},
				files: {
					'test.html': 'test.haml'
				}
			}
		}
	});
	
	grunt.registerTask('default', ['clean', 'haml', 'sass:dev', 'autoprefixer:dev', 'concat', 'uglify', 'cssmin', 'compress', 'jshint'] );

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-haml');
};