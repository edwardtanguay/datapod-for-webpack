const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'index': './src/main.js',
		'video': './src/video.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name]-[contenthash].js',
		clean: true,
	},
	mode: 'development',
	module: {
		rules: [
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
					filename: 'images/[name]-[contenthash][ext]',
				},
			},
			{
				test: /\.woff|woff2$/,
				generator: {
					filename: 'font/[name]-[contenthash][ext]',
				},
			},
			{
				test: /\.mp4$/,
				type: 'asset/resource',
				generator: {
					filename: 'media/[name]-[contenthash][ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
			minify: true,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/video.html'),
			filename: 'video.html',
			minify: true,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/images'),
					to: path.resolve(__dirname, 'dist/images'),
				},
			],
		}),
	],
};
