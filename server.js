var express = require("express");
var bodyParser = require('body-parser')

var app = express();

// var pgp = require("pg-promise");
// var db = pgp("postgres://mike:iloverowan6915@host:5432/NewsSite");

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/api/data', function (req, res) {
  let allTheData = "soooo much data";
  // get data from some source.... api or db
  console.log("getting data");
  res.send(allTheData);
});

app.post('/api/data', function (req, res) {
  let theInfoWePosted = req.body.firstName;
  res.send(theInfoWePosted + "hhhh");
});

// app.get('/api/reports', function(req, res){
//      req.body.id;
//      console.log(req.body.id);
//      res.send(getNews());
// });

// function getNews(){
//      db.one("SELECT ")
// }

app.listen(3000, function () {
  console.log('See this website at localhost:3000');
});
