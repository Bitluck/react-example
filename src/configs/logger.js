'use strict';

const bunyan = require('bunyan');
const loggerConfig = require('./configs/log.config');

const logger = bunyan.createLogger(loggerConfig);

module.exports = logger;
