const webpack = require('webpack');
const logger = require('./logger');

const webpackConfiguration = process.env.NODE_ENV === 'production'
                                                      ? require('../../webpack.prod.js')
                                                      : require('../../webpack.dev.js');

const compiler = webpack(webpackConfiguration, (err, stats) => {
  if (err || stats.hasErrors()) {
    logger.info('There are webpack exception', err, stats.toJson('minimal'));
    return;
  }
  
  logger.info('webpack initialized successfully');
});

module.exports = compiler;
