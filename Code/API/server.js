var express = require('express'),
    app = express(),
    port = 3005,
    Task = require('./user/model.js'),
    Task = require('./country/model.js'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var auth = require('./authentication/routes.js');
var userroutes = require('./user/routes');

require('./authentication/auth.js')(passport);

morgan("tiny");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.99.100:32768/projectITP', { useMongoClient: true }, function (err) {
    if (err)
    {
        console.log('Connection error');
    }
    else
    {
        console.log('Connected to mongodb')
    }
});

app.use(function (req, res, next) {
  var allowedOrigins = ['http://10.0.0.22', 'http://localhost'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
     res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

userroutes(app, passport);
auth(app);
app.listen(port);

console.log('PassIn API started at port: ' + port);
