'use strict';

require('dotenv').load();
// make environments available to this script

// require file-system node module
const fs = require('fs');

// require aws sdk obviously
const AWS = require('aws-sdk');
// invokes constructor function to create new AWS module
const s3 = new AWS.S3();

const mime = require('mime');
const path = require('path');

let file = {
 path: process.argv[2],
 title: process.argv[3]
};

let contentType = mime.lookup(file.path);
let ext = path.extname(file.path);

console.log("file contentType is ", contentType);
// logs file obviously
console.log("file is ", file);


let stream =fs.createReadStram('file.path');
let bucket = process.env.AWS_S3_BUCKET_NAME;

const params = {
  Bucket: bucket,
  Key: `${file.title}${ext}`,   // file.title + '.jpg' to hard code file type
  Body: stream,
  ContentType: contentType,
};

s3.upload(params, function(error,data){
if(error){
  console.log(error);
}
console.log(data);
});
