const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
	entry: [
    'react-hot-loader/patch',
  ],
  mode: 'development',
  devtool: "eval-source-map",
	devServer: {
		hot: true,
		hotOnly: true,
		inline: true,
	},
});
