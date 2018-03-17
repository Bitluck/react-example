'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');
let db = {};

const CONFIG = {
  user: 'db_user',
  host: 'localhost',
  database: 'postgres',
  password: 'db_password',
  port: 5432
};

const sequelize = new Sequelize(CONFIG.database, CONFIG.user, CONFIG.password, {
  host: CONFIG.host,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
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
