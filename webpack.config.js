var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	resolve: {
    extensions: ['.js', '.jsx']
	},
	devServer: {
    historyApiFallback: true
  },
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/template.html'
	})]
}