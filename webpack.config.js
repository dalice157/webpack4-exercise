const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
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
				use:['style-loader','css-loader'], //這兩個需有優先順序，css要先解析才能套入html
				test: /\.css$/
			}
		]
	}
}