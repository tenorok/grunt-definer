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
                target: 'test/tmp/с.js',
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
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'definer']);

};
