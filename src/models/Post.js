'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Post = sequelize.define('Post', {
    content: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [0, 2048]
      }
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        
      }
    }
  }, {
    underscored: true,
    tableName: 'posts'
  });

  return Post;
};
