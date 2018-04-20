'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const webpack = require('webpack');

const configs = require('./configs');

const port = configs.port || process.env.PORT;
const app = new Koa();

app.use(bodyParser());

const { sequelize } = require('./models');

const SequelizeStore = require('koa-generic-session-sequelize');
const session = require('koa-session');

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

const passport = require('./controllers/auth').passport;

app.use(passport.initialize());
app.use(passport.session());

const responseHandler = require('./middlewares/response-handler');
app.use(responseHandler());

const serve = require('koa-static');
app.use(serve('public'));

const router = require('./routes');
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
console.log(`Server is started on ${port} port in ${configs.type}`);
/* eslint-enable no-console */
