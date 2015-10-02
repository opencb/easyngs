module.exports = function(grunt) {
    'use strict';

    var connect, serveStatic;

    connect = require('connect');
    serveStatic = require('serve-static');

    grunt.initConfig({
        connect: {
            port: 8080,
            base: '.'
        }
    });

    grunt.registerTask('default', 'Start a web server', function() {

        var app, options;

        this.async();

        options = grunt.config('connect');

        app = connect();
        app.use(serveStatic(options.base)).listen(options.port);

        grunt.log.writeln("Started web server on port " + options.port);
    });

};