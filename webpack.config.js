const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: './js/bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				// use:['style-loader','css-loader'], //這兩個需有優先順序，css要先解析才能套入html
				use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						"css-loader"
				],
				test: /\.css$/
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/[name].css",
			chunkFilename: "./css/[id].css"
		})
	]
}