// Karma configuration
// Generated on Fri Dec 08 2017 20:56:57 GMT+0100 (Romance Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/tether/dist/js/tether.min.js",
        "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "./node_modules/angular/angular.js",
        "./node_modules/angular-route/angular-route.js",
        "./node_modules/angular-translate/dist/angular-translate.min.js",
        "./node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
        "./node_modules/angular-resource/angular-resource.js",
        "./node_modules/angular-mocks/angular-mocks.js",

        "./app/app.js",

        "./app/**/*.js",                                    // Cualquier *.js que encuentre dentro de app/
        "./app/**/*.spec.js"                                // Cualquier *.spec.js que encuentre dentro de app/
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // reporter options
    mochaReporter: {
      colors: {
          success: 'blue',
          info: 'green',
          warning: 'cyan',
          error: 'red'
      },
      symbols: {
          success: '+',
          info: '#',
          warning: '!',
          error: 'x'
      },
      output: 'full',
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // Type of log
    loggers: [
        { type: 'console' }
    ],


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'Firefox'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
