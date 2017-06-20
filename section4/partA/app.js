// //express is the web application framework in the mean stack
// //express lisiens for incomeing requests and will respond
// var express = require('express');
// var app = express();
//
// // Define the port to run on
// app.listen(3000);
// //this starts a server at http://localhost:3000/
// // this is hard coded setting the port
// //we can use express application veriables
// // app.set to define the property of the application
// //app.read to read it
//
// console.log('magic happens on port 3000');



//express is the web application framework in the mean stack
// //express lisiens for incomeing requests and will respond
// var express = require('express');
// var app = express();
//
// // Define the port to run on
// //app.listen(3000);
// //this starts a server at http://localhost:3000/
// // this is hard coded setting the port
//
// app.set('port',3000);
// app.listen(app.get('port'));
//
// console.log('magic happens on port ' +app.get('port'));
//


// var express = require('express');
// var app = express();
//
//
// app.set('port',3000);
// app.listen(app.get('port'),function(){
//   console.log('magic happens on port ' +app.get('port'));
// });
// console.log('me first');


// validating that express is listening

var express = require('express');
var app = express();


app.set('port',3000);
var server = app.listen(app.get('port'),function(){
  var port = server.address().port;
  // this will extract the port number from the server object
  console.log('magic happens on port ' + port);
});
//console.log('me first');
// controll c will kill the node application (which is a good thing)
