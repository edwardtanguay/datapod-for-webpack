const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		open: true,
		port: 2122,
		static: './dist',
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
		},
	},
});
