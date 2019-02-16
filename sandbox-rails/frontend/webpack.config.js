const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isSourceMap = true;

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
				test: /\.sass$/,
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
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isSourceMap
						}
					},
					{
						loader: 'sass-resources-loader',
						options: {
							sourceMap: isSourceMap,
							resources: [path.resolve('./src/sass/resources/*.sass')]
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx']
	}
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
		hot: true,
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
