const nconf = require('nconf');
const path = require('path');

nconf.argv().env().file({ file: path.join(__dirname, 'config.json') });

const env  = process.env.NODE_ENV || nconf.get('base:env');
const name = process.env.APP_NAME || nconf.get('base:name');
const host = process.env.APP_HOST || nconf.get('base:host');
const port = process.env.APP_PORT || nconf.get('base:port');

const configs = Object.assign(nconf.get('base'), nconf.get(nconf.get('NODE_ENV')), { env, name, host, port });

module.exports = configs;
