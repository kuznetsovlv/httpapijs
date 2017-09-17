"use strict";

const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || "development";
const DEV = NODE_ENV === "development";
const PRODUCT = NODE_ENV === "product";

const plugins = [
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(NODE_ENV),
			DEV: JSON.stringify(DEV),
			PRODUCT: JSON.stringify(PRODUCT)
		}
	})
];

const productPlugins = [
	new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false, drop_console: true, unsafe: true }
	})
];

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: 'index',

	noInfo: true,

	target: 'node',

	output: {filename: 'index.js', path: path.resolve(__dirname, DEV ? 'test' : 'dist'), library: 'httpapijs', libraryTarget: 'umd'},

	watch: DEV,

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: DEV ? "cheap-source-map" : null,

	plugins: !DEV ? plugins.concat(productPlugins) : plugins,

	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [{
			exclude: /node_modules/,
			test: /\.js$/,
			loader: 'babel'
		},
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'eslint-loader'
      }]
	}
}
