var fs = require('fs');

console.log("Going to get a File");
var file = fs.readFileSync('readFileSync.js');
console.log("Got the file");

console.log("App continuess ...");
