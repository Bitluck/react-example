const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const logger = require('./logger');

if(process.env.NODE_ENV !== 'production') {
  const webpackConfiguration = require('../../webpack.dev.js');

  const compiler = webpack(webpackConfiguration, (err, stats) => {
    if (err || stats.hasErrors()) {
      logger.info('There are webpack exception', err, stats.toJson('minimal'));
      return;
    }
    
    logger.info('webpack initialized successfully');
  });

  compiler.watch({}, () => {
    logger.info('building...');
  });

  module.exports = compiler;
}
