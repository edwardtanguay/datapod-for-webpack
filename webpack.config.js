const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/main.js',
	},
	mode: 'development',
	watchOptions: {
		ignored: /node_modules/,
	},
	module: {
		rules: [
			{
				test: /\.css|scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('autoprefixer')],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
			{
				test: /\.jpg|jpeg|png|gif|svg$/,
				generator: {
					filename: 'images/[name]-[hash][ext]',
				}
			},
			{
				test: /\.woff|woff2$/,
				generator: {
					filename: 'font/[name]-[hash][ext]',
				}
			}
		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/images'),
					to: path.resolve(__dirname, 'dist/images'),
				},
				{
					from: path.resolve(__dirname, 'src/index.html'),
					to: path.resolve(__dirname, 'dist/index.html'),
				},
			],
		}),
	],
};
