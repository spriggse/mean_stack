var filename = "index.js";
// file name is unexposed so it cant be called from outside the function
//export makes functions exposed
var hello = function(name){
console.log("hello " + name);

};
var intro = function(){
console.log('im a node file called ' + filename);
// unexposed files can still be called from inside its file that is later pulled out through exposed files
};
module.exports = {
  hello : hello,
  intro : intro
};
