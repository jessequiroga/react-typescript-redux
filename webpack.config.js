const path = require('path');

module.exports = {
	entry: "./src/index",
	mode: 'development',	// production
	output: {
		path: path.resolve(__dirname, './public/assets/'),
		filename: "bundle.js",
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
		host: '0.0.0.0',
		hotOnly: true,
		inline: true,
		port: 8080,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
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
		]
	},
	node: {
		fs: 'empty',
	}
};
