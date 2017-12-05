'use strict';

var messages_state = require('../messages/state');


var mongoose = require('mongoose'),
    Collection_User = mongoose.model('ModelUser'),
    Collection_Country = mongoose.model('ModelCountry');


exports.debug_createSampleCountry = function (req, res) {
    var country = new Collection_Country(req.body);
    country.save(function (err, task) {
        if(err)
            res.send(err);
        else
            res.send(messages_state.getSuccess());
    });
}
exports.debug_createSampleUser = function (req, res) {
    Collection_User.Insert({
        "name": "Austria1",
        "code": "aut",
    }, function (err, task) {
        if (err)
            console.log(err);
        else
            console.log("hello");
    });
}





