const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
		
module.exports = {
		entry: './src/js/index.js',
		output: {
			filename: 'js/bundle.js',
			path: path.resolve(__dirname,'dist')
		},
		module: {
			rules: [
				{
					use: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					//use:['style-loader','css-loader'],
					use: [
							MiniCssExtractPlugin.loader,
							{
								loader: "css-loader",
								options: {
									modules: true
								}
							},
					],
					test: /\.css$/
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "css/[name].css",
				chunkFilename: "css/[id].css"
			}),
			new HtmlWebpackPlugin({
				template: "./src/index.html"
			})
		]
}