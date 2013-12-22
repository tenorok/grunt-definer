module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            test: ['test/tmp/*']
        },
        definer: {
            all: {
                target: 'test/tmp/all.js',
                directory: 'test/modules/'
            },
            c: {
                target: 'test/tmp/c.js',
                directory: 'test/modules/',
                module: 'c',
                verbose: ['info']
            },
            d: {
                target: 'test/tmp/d.js',
                directory: 'test/modules/',
                module: 'd',
                postfix: 'js',
                verbose: ['warn', 'error']
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('default', ['clean', 'definer']);
    grunt.registerTask('test', ['clean', 'definer', 'nodeunit']);

};
