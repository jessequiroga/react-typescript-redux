const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new webpack.NamedModulesPlugin(),
  ],
});
