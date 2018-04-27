'use strict';

const fs = require('fs');
const path = require('path');
const fileType = require('file-type');
const readChunk = require('read-chunk');
const { promisify } = require('util');

const maxTextSymbols = 2048;
const validPictureExtensions = ['png', 'jpg', 'jpeg', 'gif'];

const asyncUnlink = promisify(fs.unlink);

const validPostContent = async (ctx, next) => {
  const { fields, files } = ctx.request.formData;
  const { text } = fields;
  const { picture } = files;
  
  try {
    if(text && !await validTextLength(text)) {
      await asyncUnlink(picture.path);
      return ctx.res.badRequest(`Text > then ${ maxTextSymbols } symbols`);
    }
    
    if(picture && !(await validPictureType(picture) && await validPictureExtension(picture))) {
      await asyncUnlink(picture.path);
      return ctx.res.badRequest(`Not supported format. Enabled formats: ${ validPictureExtensions }`);
    }

    await next();
  } catch(err) {
    return ctx.res.internalServerError();
  }
}

const validTextLength = async text => {
  if(text.length <= maxTextSymbols) {
    return true;
  }

  return false;
}

const validPictureType = async picture => {
  try {
    const buffer = await readChunk(picture.path, 0, 4100);
    const type = fileType(buffer);
    if(type && validPictureExtensions.includes(type.ext)) { 
      return true;
    }

    return false;
  } catch(err) {
    return false;
  }
}

const validPictureExtension = async picture => {
  const pictureExtension = path.parse(picture.path).ext;
  const withoutDot = 1;

  if(validPictureExtensions.includes(pictureExtension.substring(withoutDot))) {
    return true;
  }

  return false;
}

module.exports = validPostContent;
