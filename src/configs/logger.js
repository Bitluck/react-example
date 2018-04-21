'use strict';

const bunyan = require('bunyan');
const loggerConfig = require('./log.config');

const logger = bunyan.createLogger(loggerConfig);

module.exports = logger;
