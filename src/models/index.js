'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');

const configs = require('../configs');
const logger = require('../configs/logger');

let db = {};

const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

const CONFIG = configs.db;

const DATABASE_URL = 'postgres://gbkggplhpztkvt:a8bf3e3d98a9d2389f5270bc66f02d162078f665b71b68a10fab749db0612c86@ec2-54-235-90-200.compute-1.amazonaws.com:5432/deusm0541tpdrm';
//const HEROKU_POSTGRESQL_RED_URL = 'postgres://aivgptyoccooph:e6c132c3412cf8fbb1e1e21a4dd69ddba70aad1e9cc4a5814c5af1b7c6f7257c@ec2-54-225-200-15.compute-1.amazonaws.com:5432/db4hct7d22935s';
const host = 'ec2-54-235-90-200.compute-1.amazonaws.com';
const port = 5432;

const sequelize = new Sequelize(DATABASE_URL, {
  host,
  port,
  dialect: CONFIG.sequelize.dialect,
  pool: CONFIG.sequelize.pool,
  logging: logger.debug.bind(logger),
  operatorsAliases
});

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach((file) => {
    if(file.slice(-3) !== '.js') return;
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

  Object.keys(db).forEach((modelName) => {
    if(db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//TODO: add success check
db.sequelize.sync()
  .then(() => {
    logger.info('db success sync');
  })
  .catch((err) => {
    logger.error(`db failed sync with err: ${err}`);
    process.exit(err.code);
  });

module.exports = db;
