module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // we could just concatenate everything, really
        // but we like to have it the complex way.
        // also, in this way we do not have to worry
        // about putting files in the correct order
        // (the dependency tree is walked by r.js)
        less: {
            dist: {
                options: {
                    paths: [],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapFileInline: false,
                    sourceMapURL: '++plone++imio.patterns/less/imio-patterns-bundle.less',
                    sourceMapFilename: 'less/imio-patterns-bundle-compiled.less.map',
                    modifyVars: {
                        "isPlone": "false"
                    }
                },
                files: {
                    'css/imio-patterns-bundle-compiled.css': 'less/imio-patterns-bundle.less',
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        concat: {
            options: {
                separator: ";",
            },
            dist: {
                src: ["pattern/imio.pattern.js"],
                dest: "pattern/imio.pattern.js",
            },
        },
        uglify: {
            options: {
                separator: ";",
            },
            dist: {
                src: ["pattern/imio.pattern.js"],
                dest: "pattern/imio-patterns-bundle-compiled.js",
            },
        },
        watch: {
            scripts: {
                files: [
                    'less/*.less',
                ],
                tasks: ['less', 'postcss', 'uglify:dist']
            }
        },
        browserSync: {
            html: {
                bsFiles: {
                    src : [
                      'less/*.less',
                      '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    online: true,
                    server: {
                        baseDir: "."
                    },
                }
            },
            plone: {
                bsFiles: {
                    src : [
                      'less/*.less',
                      '*.html',
                      '*.xml'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    proxy: "localhost:8080",
                    reloadDelay: 3000,
                    // reloadDebounce: 2000,
                    online: true
                }
            }
        }
    });


    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // CWD to theme folder
    grunt.file.setBase('./src/imio/patterns/browser/static/');

    grunt.registerTask('compile', ['less', 'postcss', 'uglify:dist']);
    grunt.registerTask('default', ['compile']);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);
    grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
};