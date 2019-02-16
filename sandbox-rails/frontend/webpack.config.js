const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isSourceMap = true;

module.exports = {
	mode: 'development',
	entry: ['./src/ts/index.tsx'],
	resolve: {
		extensions: ['.js', '.tsx', '.ts']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: isSourceMap,
							localIdentName: '[name]-[local]-[hash:base64:4]',
							modules: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: isSourceMap,
							plugins: [require('autoprefixer')({ grid: true })]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isSourceMap
						}
					}
				]
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
		disableHostCheck: true,
		port: 3030,
		// 他デバイスで見たい時用
		host: '0.0.0.0',
		overlay: true,
		hot: true,
		filename: 'bundle.js',
		publicPath: '/',
		stats: {
			colors: true
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			hash: true,
			template: path.resolve(__dirname, './src/html/index.html')
		})
	]
};
