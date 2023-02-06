const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production';
	const config = {
		entry: './src/index.jsx',
		output: {
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /.(js|jsx?)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /.s?css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(gif|png|jpe?g|svg)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
							options: {
								bypassOnDebug: true,
								disable: true,
							},
						},
					],
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx'],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],
		devServer: {
			historyApiFallback: true,
			open: true,
			hot: true,
			port: 8080,
		},
	};

	if (isProduction) {
		config.plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	if (isProduction) {
		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: '[name].css',
			})
		);
	}

	return config;
};
