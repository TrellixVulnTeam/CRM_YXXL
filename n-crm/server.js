var http=require('http');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));
app.set('view engine', 'ejs');
var supplier = require('./server/supplier')(app);
var path = __dirname + '/views/';
var routes = require('./server/routes')(app);
//var productroutes = require('./server/Product-Server')(app);
var configDB = require('./server/config');

var port = process.env.PORT || 8080;
http.listen(port);
