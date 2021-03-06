

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-scss-preprocessor')
    ],
    client: {
      captureConsole: false,
      clearContext: false 
    },
    files: [
      {
        pattern: '../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css',
        included: true,
        watched: true
      },
      {pattern: './test.ts', watched: false},
      {pattern: './app/styles/**/*.*', watched: true, included: true, served: true}
    ],
    preprocessors: {
      './app/styles/**/*.*': ['scss']
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'mocha'],
    mochaReporter: {
      output: 'minimal'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    browsers: ['ChromeHeadlessNoSandbox'],
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 50000,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }
  });
};
