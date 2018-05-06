'use strict';

const Koa = require('koa');
const webpack = require('webpack');
const bodyParser = require('koa-bodyparser');
const SequelizeStore = require('koa-generic-session-sequelize');
const session = require('koa-session');
const serve = require('koa-static');

const configs = require('./configs');
const { sequelize } = require('./models');
const router = require('./routes');
const passport = require('./controllers/auth').passport;
const logger = require('./configs/logger');
const logMiddleware = require('./middlewares/log');
const responseHandler = require('./middlewares/response-handler');

const port = configs.port || process.env.PORT || 3000;
process.env.PORT = port;
const host = configs.host || '0.0.0.0';
const app = new Koa();

app.use(bodyParser());

app.use(logMiddleware({ logger }));

app.keys = configs.keys;

app.use(session({
  key: configs.session.key,
  maxAge: configs.session.maxAge,
  renew: configs.session.renew,
  resave: configs.session.resave,
  saveUninitialized: configs.session.saveUninitialized,
  store: new SequelizeStore(
    sequelize,
    {}
  )
}, app));

app.use(passport.initialize());
app.use(passport.session());

app.use(responseHandler());

app.use(serve('public'));

app.use(router.routes());
app.use(router.allowedMethods());

const compiler = webpack(require('../webpack.config.js'), (err, stats) => {
  if (err || stats.hasErrors()) {
    logger.info('There are webpack exception', err, stats.toJson('minimal'));
    return;
  }
  
  logger.info('webpack initialized successfully');
});

compiler.watch({}, () => {
  logger.info('building...');
});

app.on('error', err => {
  logger.error({ err, event: 'error' }, 'Unhandled exception occured');
});


app.listen(port, host, () => {
  logger.info(`Server is started on ${host}:${port} in ${configs.env}`);
});
