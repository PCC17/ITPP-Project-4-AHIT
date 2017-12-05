var express = require('express'),
    app = express(),
    port = 3001,
    mongoose = require('mongoose'),
    Task = require('./user/model'),
    Task = require('./country/model'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.0.0.21', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
