const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
/***
* 為了因應不同os出來的路徑寫法不一
* 所以需用 NodeJs 的 Path
* ex: path.resolve(__dirname,'src','js', 'index.js')
* 讓他的路徑可依 mac 或 window 而產出他們自己本身的路徑
***/
module.exports = {
	mode: devMode ? 'development' : 'production',
	entry: path.resolve(__dirname,'src','js', 'index.js'),
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				//use:['style-loader','css-loader'],
				use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
						// {
						// 	loader: "css-loader",
						// 	options: {
						// 		modules: true //要不要使用css Modules
						// 	}
						// },
				],
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
	],
	devServer:{
		contentBase: path.resolve(__dirname,'dist') //伺服器建立的路徑
	}
}