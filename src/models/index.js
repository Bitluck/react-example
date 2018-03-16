'use strict';

const Sequelize = require('sequelize');
const { assign } = Object;

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

const User = require('./User')(sequelize);
const Post = require('./Post')(sequelize);
const Profile = require('./Profile')(sequelize);

User.hasMany(Post);
User.hasOne(Profile);

let db = {};
assign(db, { sequelize, User, Post });

//TODO: add success check
db.sequelize.sync();

module.exports = db;
