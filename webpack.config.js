var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: [
	'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
		new HtmlWebpackPlugin({
      favicon: './app/images/favicon.ico'
    })
	],
	output: {
		path: __dirname ,
		filename: './public/bundle.js'

	},
	resolve: {
		alias: {
			Main: __dirname + '/app/components/Main.jsx',
			Menu: __dirname + '/app/components/Menu.jsx',
			Link: __dirname + '/app/components/Link.jsx',
			ApplicationStyles: __dirname + '/app/styles/app.scss'
		},
		extensions: ['.js','.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015','stage-0'],
					compact: false
				},
				test: /\.jsx?$/,
				exclude:/(node_modules | bower_components)/
			}
		]
	}
};