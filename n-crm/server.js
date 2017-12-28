var http=require('http');
var express = require('express');
var session = require('express-session');
var fs = require('fs');
var multer = require('multer');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var http = require('http').Server(app);

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: "secret",
    //  name: cookie_name,
    //store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
var path = __dirname + '/views/';
var routes = require('./server/NewFeed-Server')(app);
var productroutes = require('./server/Product-Server')(app);
var externalProductCoderoutes = require('./server/External-Product-Server')(app);
var purchaseOrderroutes = require('./server/Purchase-Order-Server')(app);
var userroutes = require('./server/User-Server')(app);
var supplier = require('./server/Supplier-Server')(app);
var employee = require('./server/Employee')(app);
var customerRoutes = require('./routes/customers')(app);
var department = require('./server/Department')(app);
var configDB = require('./server/config' );

var port = process.env.PORT || 8080;
http.listen(port);
