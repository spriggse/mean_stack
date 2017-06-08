require('./instant_hello');
// if no ./ itll only look in the node module folder
// ./ means look in the same folder then file name but no .js becase its bad practice
var talk = require('./talk');
//index files with require dont have to be called they wll be defaulted as the file
talk.intro();
talk.hello("eian");

var goodbye = require("./talk/goodbye");
var question = require("./talk/question");
var answer = question.ask("whats the meaning of life?");
console.log(answer);
goodbye();
