const SmartBannerPlugin = require('smart-banner-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const src = path.join(__dirname, 'src');
const pkg = require('./package.json');

module.exports = {
	context: src,
	entry: {
		webslides: './js/full.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'static/js'),
		publicPath: '/static/js/'
	},
	devServer: {
		contentBase: __dirname,
		host: '0.0.0.0'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'babel-loader',
					'eslint-loader'
				],
				include: src
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?url=false!postcss-loader!sass-loader'
				}),
				include: src
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('../css/webslides.css')
	]
};
