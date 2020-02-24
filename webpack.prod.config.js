const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  devServer: {
		hot: false,
  }
});
