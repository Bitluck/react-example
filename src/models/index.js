'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');

const configs = require('../configs');
const logger = require('../configs/logger');

let db = {};

const CONFIG = configs.db;

const sequelize = new Sequelize(CONFIG.database, CONFIG.user, CONFIG.password, {
  host: CONFIG.host,
  dialect: CONFIG.sequelize.dialect,
  pool: CONFIG.sequelize.pool,
  logging: logger.debug.bind(logger)
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

db.sequelize.sync();

module.exports = db;
