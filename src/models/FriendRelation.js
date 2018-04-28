'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const FriendRelation = sequelize.define('FriendRelation', {
    user_from: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    user_to: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    state: {
      type: Sequelize.ENUM,
      values: ['request', 'friends'],
      allowNull: false
    }
  }, {
    underscored: true,
    tableName: 'friend_relations'
  });

  return FriendRelation;
};
