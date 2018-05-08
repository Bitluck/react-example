'use strict';

const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const postPictureUploadPath = path.resolve('public/img/posts');

const opts = {
  encoding: 'utf-8',
  uploadDir: postPictureUploadPath,
  keepExtensions: true,
  maxFieldsSize: 2 * 1024, //2 Kb
  maxFileSize: 2 * 1024 * 1024, //2 Mb
  maxFields: 1,
  hash: 'md5',
  formMultiples: true
}

function formidablePromise (req, opts = {}, fileFields = []) {
  return new Promise(function (resolve, reject) {
    const form = new formidable.IncomingForm(opts);

    form.on('fileBegin', async (name, file) => {
      const filePath = path.parse(file.path);
      const resultPath = path.resolve(filePath.root, filePath.dir, filePath.base.replace('upload_', ''));
      file.path = resultPath;
    });

    form.parse(req, function (err, fields, files) {
      for(let file in files) {
        if(!fileFields.includes(file)) {
          fs.unlink(files[file].path, err => {
            if (err) return reject(err);
          });
          delete files[file];
        }
      }

      if (err) return reject(err);
      resolve({ fields, files });
    })
  })
}

const parseForm = async (ctx, next) => {
  try {
    if(ctx.req.headers['content-length'] > opts.maxFileSize) {
      return ctx.res.badRequest(null, 'Picture too large. Max file size 2Mb.');
    }

    ctx.request.formData = await formidablePromise(ctx.req, opts, ['picture']);
  } catch(err) {
    return ctx.res.badRequest(null, err.message);
  }

  await next();
}

module.exports = parseForm;
