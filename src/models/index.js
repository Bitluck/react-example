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

const sequelize = new Sequelize(CONFIG.database, CONFIG.user, CONFIG.password, {
  host: CONFIG.host,
  port: CONFIG.port,
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

db.sequelize.sync()
  .then(() => {
    logger.info('db success sync');
  })
  .catch((err) => {
    logger.error(`db failed sync with err: ${err}`);
    process.exit(err.code);
  });

module.exports = db;
