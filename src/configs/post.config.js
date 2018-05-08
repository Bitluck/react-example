'use strict';

const fs = require('fs');
const path = require('path');

const postPictureDirectory = path.join(__dirname, '../../public/img/posts');

try {
  fs.accessSync(postPictureDirectory, fs.constants.R_OK | fs.constants.W_OK);
} catch(err) {
  try {
    fs.mkdirSync(postPictureDirectory);
  } catch(error) {
    process.exit(error.code);
  }
}

module.exports = postPictureDirectory;
