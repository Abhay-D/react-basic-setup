const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: { drop_console: true },
					output: {}
				}
			})
		]
	}
});
