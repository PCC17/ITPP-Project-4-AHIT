'use strict';

var messages_state = require('../messages/state');
var sampleData = require('../data/sample');

var mongoose = require('mongoose'),
    ModelUser = mongoose.model('ModelUser'),
    ModelCountry = mongoose.model('ModelCountry');




exports.debug_insertAllCountries = function (req, res) {
    ModelCountry.remove({});
    var array = sampleData.getCountries();
    ModelCountry.insertMany(array, function (err, task) {
        if (err)
            res.send(err);
        else
            res.send(messages_state.getSuccess());
    });
}
exports.debug_createSampleUser = function (req, res) {
    var user = new ModelUser(sampleData.getUser());
    user.save(function (err, results) {
        if (err) {
            console.log(err);
            res.send(messages_state.getError());
        }
        else {
            console.log(messages_state.getSuccess());
            res.send(messages_state.getSuccess());
        }
    });
}

// user functions

exports.login = function (req, res) {
    passport.authenticate('local', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/');
        }
}





