const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['./src/ts/index.tsx'],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			},
			{
				enforce: 'pre',
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: 'tslint-loader'
			}
		]
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: '/dist/js',
		port: 3030,
		host: '0.0.0.0',
		overlay: true,
		filename: 'bundle.js',
		publicPath: '/',
		stats: {
			colors: true
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: true,
			template: path.resolve(__dirname, './src/html/index.html')
		})
	]
};
