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
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthdate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['male', 'female', 'other', 'rather not say'],
      allowNull: false
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    underscored: true,
    tableName: 'profiles'
  });

  return Profile;
};
