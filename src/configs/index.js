const nconf = require('nconf');
const path = require('path');

nconf.argv().env().file({ file: path.join(__dirname, 'config.json') });

const env  = process.env.NODE_ENV || nconf.get('base:env');

const configs = Object.assign(nconf.get('base'), nconf.get(env));

configs.name = process.env.APP_NAME || configs.name;
configs.host = process.env.APP_HOST || configs.host; 
configs.port = process.env.APP_PORT || configs.port;

module.exports = configs;
