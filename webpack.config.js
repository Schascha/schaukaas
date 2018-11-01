const
	path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/scss/main.scss',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'styles.css'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				use: [{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('autoprefixer'),
								require('cssnano')
							]
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			})
		}]
	},
	devServer: {
		historyApiFallback: true,
		overlay: true,
		noInfo: true
	},
	watch: true,
	plugins: [
		new ExtractTextPlugin({
			filename: 'styles.css',
			allChunks: true
		})
	]
}
