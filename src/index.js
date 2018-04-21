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

const port = configs.port || process.env.PORT;
const app = new Koa();

app.use(bodyParser());

app.use(logMiddleware({ logger }));

app.keys = configs.keys;

app.use(session({
  key: configs.session.key,
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
    /* eslint-disable no-console */
    console.log('There are webpack exception', err, stats.toJson('minimal'));
    /* eslint-enable no-console */
    return;
  }

  /* eslint-disable no-console */
  console.log('webpack initialized successfully');
  /* eslint-enable no-console */
});

compiler.watch({}, () => {
  /* eslint-disable no-console */
  console.log('building...');
  /* eslint-enable no-console */
});

app.listen(port);
/* eslint-disable no-console */
console.log(`Server is started on ${port} port in ${configs.env}`);
/* eslint-enable no-console */
