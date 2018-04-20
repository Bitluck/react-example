const nconf = require('nconf');
const path = require('path');

nconf.argv().env(). file({ file: path.join(__dirname, 'config.json') });

const configs = Object.assign(nconf.get('base'), nconf.get(nconf.get('NODE_ENV')));

module.exports = configs;
