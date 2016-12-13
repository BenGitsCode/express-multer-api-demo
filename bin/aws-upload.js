'use strict';

const fs = require('fs');

const AWS = require('aws-sdk');
// invokes constructor function to create new AWS module
const s3 = new AWS.S3();

let file = {
 path: process.argv[2],
 title: process.argv[3]
};

console.log("file is ", file);
