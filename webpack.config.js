const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',	// production
	entry: [
    'react-hot-loader/patch',
    "./src/index.tsx"
  ],
	output: {
		path: path.resolve(__dirname, './public/'),
		filename: "bundle.js",
	},
	devtool: "eval-source-map",
	devServer: {
		contentBase: path.resolve(__dirname, './public/'),
		historyApiFallback: true,
		host: '0.0.0.0',
		hot: true,
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
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
