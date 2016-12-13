'use strict';

const fs = require('fs');

const AWS = require('aws-sdk');
// invokes constructor function to create new AWS module
const s3 = new AWS.S3();

let file = {
 path: process.argv[2],
 title: process.argv[3]
};

// logs file obviously
console.log("file is ", file);


let stream =fs.createReadStram('file.path');
let bucket = process.env.AWS_S3_BUCKET_NAME;

const params = {
  Bucket: bucket,
  Key: file.title,
  Body: stream
};

s3.upload(params, function(error,data){
if(error){
  console.log(error);
}
console.log(data);
});
