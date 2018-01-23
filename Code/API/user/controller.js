'use strict';

var messages_state = require('../messages/state');
var sampleData = require('../data/sample');

var mongoose = require('mongoose');
var ModelUser = mongoose.model('ModelUser');
var ModelCountry = mongoose.model('ModelCountry');

exports.debug_restricted = function (req, res) {
    res.send("Secret Area");
}

exports.debug_insertAllCountries = function (req, res) {
    ModelCountry.remove({});
    var arr = sampleData.getCountries();
    ModelCountry.insertMany(arr, function (err, task) {
        if (err)
            res.send(err);
        else
            res.send(messages_state.getSuccess());
    });
}
exports.debug_createSampleUser = function (req, res) {
    console.log(JSON.stringify(sampleData.getUser()));
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

exports.success = function (req, res) {
    res.send(messages_state.getSuccess());
        
}

exports.failure = function (req, res) {
    res.send(messages_state.getError());

}

// login user

exports.login = function (req, res) {
    passport.authenticate('local', { failureRedirect: '/login' }),
        function (req, res) {
            console.log("yes");
            res.redirect('/');
        }
}







