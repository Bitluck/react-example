'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Post = sequelize.define('Post', {
    text: {
      type: Sequelize.STRING(2048),
      allowNull: false,
      defaultValue: '',
      validate: {
        len: [0, 2048]
      }
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      validate: {
        
      }
    }
  }, {
    underscored: true,
    tableName: 'posts'
  });

  return Post;
};
