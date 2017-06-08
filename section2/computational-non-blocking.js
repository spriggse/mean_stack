var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
  stdio : 'inherit'
})

//child_process keep the node pipe line clear from heavy funtions 

console.log(2);
