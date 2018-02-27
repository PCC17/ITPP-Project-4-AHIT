'use strict';

var messages_state = require('../messages/state');
var sampleData = require('../data/sample');

var mongoose = require('mongoose');
var ModelUser = mongoose.model('ModelUser');
var ModelCountry = mongoose.model('ModelCountry');

//debug area
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

//end debug area

//create update delete category area

exports.createCategory = function (req, res) {
    var email = req.user.email;
    var user = ModelUser.findOne({ 'local.email': email }, 'passCategory', function (err, user) {
        if (err) res.send(messages_state.getError());
        console.log('geht eh %s.', email);
        var category = req.body;
        console.log(req.body);
        user.passCategory.push(category);
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
    });
}
exports.updateCategory = function (req, res) {
    var email = req.user.email;
    ModelUser.findOneAndUpdate({
        'local.email': email, 'passCategory.name': req.body.name
    }, { $set: { "passCategory.$.name": req.body.newname } },
    function (err, doc) {
        console.log("gjh");
        if (err || doc == null) {
            console.log("234567");
            console.log(err);
            res.send(messages_state.getError());
        }
        else if (doc) {
            console.log("234567dfsghj");
            res.send(messages_state.getSuccess());
        }
    });
}
exports.deleteCategory = function (req, res) {
    var email = req.user.email;

    ModelUser.findOneAndUpdate({ 'local.email': email },
        { $pull: { 'passCategory': { 'name': req.body.name } } },
        function (err, user) {
            if (err) {
                console.log(err);
                res.send(messages_state.getError());
            }
            else if (user)
                res.send(messages_state.getSuccess());
        }
    );

}

//end create update delete category area

//success and failure area

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







