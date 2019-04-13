const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src'),
	watch: true,
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		// Pravidla pro soubory ze src
		rules: [
			{
				// Otestuj všechny js
				test: /\.js/,
				exclude: /(node_modules)/,
				use: {

					// Transpiluj EcmaScript do plain JS
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				// Otestuj všechny scss
				test: /\.scss$/,

				// compiles Sass to CSS
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]

				/*use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})*/

			}
		]
	},

	/*plugins: [
		new ExtractTextPlugin('style.css')
	]*/

};