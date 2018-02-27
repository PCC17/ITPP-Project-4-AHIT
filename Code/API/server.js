var express = require('express'),
    app = express(),
    port = 3005,
    Task = require('./user/model.js'),
    Task = require('./country/model.js'),
    bodyParser = require('body-parser');



var passport = require('passport');
var flash = require('connect-flash');
require('./authentication/passport')(passport);

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:qwertgfdsa@ds141284.mlab.com:41284/projectitpp', { useMongoClient: true}, function (err) {
    if (err)
    {
        console.log('Connection error');
    }
    else
    {
        console.log('Connected to mongodb')
    }
});


//require('./config/passport')(passport); // pass passport for configuration

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions





app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var userroutes = require('./user/routes');
userroutes(app, passport);
app.listen(port);

console.log('PassIn API started at port: ' + port);
