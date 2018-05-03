'use strict';

const fs = require('fs');
const path = require('path');
const { env, name } = require('./');

const logDirectory = path.join(__dirname, '../../logs/');

fs.access(logDirectory, fs.constants.R_OK | fs.constants.W_OK, err => {
  if(err) {
    fs.mkdir(logDirectory, err => {
      if(err) {
        process.exit(err.code);
      }
    });
  }
});

const directory = process.env.LOG_DIRECTORY || logDirectory;
const filename = process.env.LOG_FILENAME || `${name}.${env}.json.log`;

const config = {
  name,
  streams: []
};

if (env === 'production') {
  config.streams.push({
    type: 'rotating-file',
    path: path.join(directory, filename),
    period: '3d',
    count: 3,
    level: process.env.LOG_LEVEL || 'info'
  });
  config.streams.push({
    type: 'stream',
    stream: process.stderr,
    level: 'warn'
  });
} else if (env === 'development') {
  config.streams.push({
    type: 'stream',
    stream: process.stdout,
    level: 'debug'
  });
}

module.exports = config;
