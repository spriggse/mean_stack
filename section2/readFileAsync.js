var fs = require('fs');

var onFileLoad = function(err,file){
  console.log("Got the file");
}
//this named funtion is easy to test
console.log("Going to get a File");
fs.readFile('readFileSync.js', onFileLoad);


console.log("App continuess ...");

//
//
// var fs = require('fs');
//
// console.log("Going to get a File");
// fs.readFile('readFileSync.js', function(err, file) {
//   console.log("Got the file");
// });
//the function(err,file) is anonimus callback the function is called right there and works right there
// but this can get confusing and you cant do any unit testing
//
//
//
//
// console.log("App continuess ...");
