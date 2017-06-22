var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
  console.log('GET the hotels');
  res
    .status(200)
    .json({ hotelData });

};
module.exports.hotelsGetOne = function(req, res){
  var hotelId = req.perams.hotelId;
  var thisHotel = hotelData[hotelId]
  console.log('GET  hotelId', hotelId);
  res
    .status(200)
    .json({ thisHotel });

};
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
  console.log('GET the json');
  res
    .status(200)
    .json(hotelData);
};

module.exports.hotelsGetOne = function(req, res) {
  console.log('GET hotelId', req.params.hotelId);
  res
    .status(200)
    .json(hotelData[req.params.hotelId]);
};
