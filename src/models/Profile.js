'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Profile = sequelize.define('Profile', {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  },
  {
    underscored: true,
    tableName: 'profiles',
    freezeTableName: true
  });

  return Profile;
};
