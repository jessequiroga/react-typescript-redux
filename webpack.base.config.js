const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const title = require('./package').title;

module.exports = {
	entry: ["./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, 'public/'),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			Components: path.resolve(__dirname, 'src/components/'),
			Navigation: path.resolve(__dirname, 'src/navigation/'),
			Pages: path.resolve(__dirname, 'src/pages/'),
			Store: path.resolve(__dirname, 'src/store/'),
			Styles: path.resolve(__dirname, 'src/styles/'),
			Types: path.resolve(__dirname, 'src/types/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
				exclude: /node_modules/

			},
			{
				test: /\.js$/,
				loader: "source-map-loader",
				enforce: "pre",
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				]
			},
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public/'),
		historyApiFallback: true,
		host: '0.0.0.0',
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.ejs'),
			templateParameters: (compilation, assets, assetTags, options) => {
				return {
					compilation,
					webpackConfig: compilation.options,
					htmlWebpackPlugin: {
						tags: assetTags,
						files: assets,
						options
					},
					'title': title || null
				};
			},
		}),
	],
};
