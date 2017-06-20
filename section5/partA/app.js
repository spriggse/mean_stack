// express middleware
var express = require('express');
var app = express();
var path = require('path');

app.set('port',3000);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  //pass in an anoimus function
  next();
  // so next will continue the middle ware
});
// app.use('/css', function(req, res, next) {
// itll only pull out the request if theres a css fold
// it wont displays css/bootstrap/style it will go
//  /bootstrap/style
//   console.log(req.method, req.url);
//
//   next();
//
// });

// ex app.use
// the .use is the middleware and its job is to do something
// then move on to the next middleware till its done
app.use(express.static(path.join(__dirname, 'public')));
// app.use funtion will not work on the line obove if its down hear
app.get('/json', function (req, res) {
  console.log("GET the json");
  res
    .status(200)
    .json({"jsonData" : true});

});
app.get('/file', function (req, res) {
  console.log("GET the file");
  res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));

});
var server = app.listen(app.get('port'),function(){
  var port = server.address().port;
  console.log('magic happens on port ' + port);
});
