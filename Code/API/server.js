var express = require('express'),
    app = express(),
    port = 3001,
    mongoose = require('mongoose'),
    Task = require('./user/model'),
    Task = require('./country/model'),
    bodyParser = require('body-parser');


var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');



// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.8.0.6', { useMongoClient: true });



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var userroutes = require('./user/routes');
userroutes(app);
app.listen(port);

console.log('PassIn API started at port: ' + port);
