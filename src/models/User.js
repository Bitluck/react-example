'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const User = sequelize.define('User', {
    login: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    underscored: true,
    tableName: 'users',
    freezeTableName: true
  });

  return User;
};
