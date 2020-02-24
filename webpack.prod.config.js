const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  devServer: {
		contentBase: path.resolve(__dirname, './public/'),
		historyApiFallback: true,
		host: '0.0.0.0',
		hot: false,
		port: 8080,
	},
});
