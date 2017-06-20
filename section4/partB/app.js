// var express = require('express');
// var app = express();
//
//
// app.set('port',3000);
//
// app.get('/', function (req, res) {
//   console.log("GET the homepage");
//   res.send("express yourself");
// });
//
// var server = app.listen(app.get('port'),function(){
//   var port = server.address().port;
//   // this will extract the port number from the server object
//   console.log('magic happens on port ' + port);
// });



// var express = require('express');
// var app = express();
//
//
// app.set('port',3000);
//
// app.get('/', function (req, res) {
//   console.log("GET the homepage");
//   res
//     .status(404)
//     .send("express yourself");
//     //adding a 404 error to our server
// });
//
// var server = app.listen(app.get('port'),function(){
//   var port = server.address().port;
//   // this will extract the port number from the server object
//   console.log('magic happens on port ' + port);
// });




// var express = require('express');
// var app = express();
// var path = require('path');
// // this efects /file section
//
//
// app.set('port',3000);
//
// app.get('/', function (req, res) {
//   console.log("GET the homepage");
//   res
//     .status(404)
//     .send("express yourself");
//     //adding a 404 error to our server
//     // http://localhost:3000
// });
// app.get('/json', function (req, res) {
//   console.log("GET the json");
//   res
//     .status(200)
//     .json({"jsonData" : true});
//     //displays jason code
//     //http://localhost:3000/json
// });
// app.get('/file', function (req, res) {
//   console.log("GET the file");
//   res
//     .status(200)
//     .sendFile(path.join(__dirname, 'app.js'));
//     //displays the code in text
//   //  http://localhost:3000/file
// });
//
// var server = app.listen(app.get('port'),function(){
//   var port = server.address().port;
//   // this will extract the port number from the server object
//   console.log('magic happens on port ' + port);
// });





var express = require('express');
var app = express();
var path = require('path');
// this efects /file section


app.set('port',3000);

app.get('/', function (req, res) {
  console.log("GET the homepage");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'index.html'));
    //adding a 404 error to our server
    // http://localhost:3000
});
app.get('/json', function (req, res) {
  console.log("GET the json");
  res
    .status(200)
    .json({"jsonData" : true});
    //displays jason code
    //http://localhost:3000/json
});
app.get('/file', function (req, res) {
  console.log("GET the file");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
    //displays the code in text
  //  http://localhost:3000/file
});

var server = app.listen(app.get('port'),function(){
  var port = server.address().port;
  // this will extract the port number from the server object
  console.log('magic happens on port ' + port);
});
