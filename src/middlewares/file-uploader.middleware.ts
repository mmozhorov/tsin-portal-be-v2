import { Injectable, NestMiddleware } from '@nestjs/common';
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require("multer");

require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.accessKey,
  secretAccessKey:  process.env.secretAccessKey,
  region: 'ca-central-1'
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'touchstone-be',
    key: function (req: any, file: any, cb: any) {
      console.log(file);
      cb(null, new Date().toISOString() + file.originalname);
    }
  })
});

@Injectable()
export class FileUploaderMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    upload.array('photo', 1)(req, res, next)
  }
}