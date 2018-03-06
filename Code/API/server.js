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

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:ansti123@ds157538.mlab.com:57538/pro', { useMongoClient: true}, function (err) {
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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
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
