/**
 * Created by Ellery1 on 15/8/11.
 */
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015', 'react']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public/es6/',
                    src: ['**/*.js'],
                    dest: 'public/scripts/',
                    ext: '.js'
                }]
            }
        },
        concat: {
            js: {
                files: {
                    'public/dest/base.js': ['public/vendor/jquery.js', 'public/vendor/bootstrap.js']
                }
            },
            css: {
                files: {
                    'public/dest/style.css': ['public/stylesheets/*.css']
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'public/dest/base.min.js': 'public/dest/base.js'
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'public/dest/style.min.css': 'public/dest/style.css'
                }
            }
        },
        clean: {
            beforebuild: ['public/dest/'],
            afterbuild: ['public/dest/base.js', 'public/dest/style.css','public/scripts']
        }
    });

    grunt.registerTask('default', ['babel','watch']);
    grunt.registerTask('build', ['concat:js', 'concat:css', 'uglify', 'cssmin']);
};