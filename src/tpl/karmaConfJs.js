module.exports = 
	`// we can just use the exact same webpack config by requiring it
	// but make sure to delete the normal entry
	var webpackConf = require('./webpack.config');
	delete webpackConf.entry;

	module.exports = function (config) {

		config.set({
			browsers: ['PhantomJS'], // Chrome ,PhantomJS
			frameworks: ['jasmine'],
			reporters: ['spec'],
			// this is the entry file for all our tests.
			files: ['./test/index.js'],
			// we will pass the entry file to webpack for bundling.
			preprocessors: {
				'./test/index.js': ['webpack']
			},
			webpack: webpackConf,
			webpackMiddleware: {
				noInfo: true
			},
			singleRun: true
		})
	}`