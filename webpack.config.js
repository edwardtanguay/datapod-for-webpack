const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/main.js'
	},
	mode: 'development',
	watchOptions: {
		ignored: /node_modules/
	},
};
