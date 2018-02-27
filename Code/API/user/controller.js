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
    var email = req.payload.email;
    var user = ModelUser.findOne({ 'local.email': email }, 'passCategory', function (err, user) {
        if (err) res.send(messages_state.getError());
        var category = req.body;
        console.log(req.body);
        user.passCategory.addToSet(category);
        user.update(function (err, results) {
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
    var email = req.payload.email;
    ModelUser.findOneAndUpdate({
        'local.email': email, 'passCategory.name': req.body.name
    }, { $set: { "passCategory.$.name": req.body.newname } },
    function (err, doc) {
        if (err || doc == null) {
            console.log("234567");
            console.log(err);
            res.send(messages_state.getError());
        }
        else if (doc) {
            res.send(messages_state.getSuccess());
        }
    });
}
exports.deleteCategory = function (req, res) {
    var email = req.payload.email;

    ModelUser.findOneAndUpdate({ 'local.email': email },
        { $pull: { 'passCategory': { 'name': req.body.name } } },
        function (err, user) {
            if (err) 
                res.send(messages_state.getError());
            else if (user)
                res.send(messages_state.getSuccess());
        }
    );

}
exports.getCategories = function (req, res) {
    var email = req.payload.email;

    ModelUser.findOne({ 'local.email': email },
       
        function (err, user) {
            if (err)
                res.send(messages_state.getError());
            else if (user) {
                console.log(JSON.stringify(user.passCategory));
                res.send(JSON.stringify(user.passCategory));
            }
        }
    );

}

//end create update delete category area

//create update delete entry area

exports.createEntry = function (req, res) {
 /*   var email = req.payload.email;
    ModelUser.findOne({ 'local.email': email},, {} }, req.params.category }, 
        function (err, category) {
            console.log("hier bin ich wieder");
            if (err)
            {
                console.log(err);
               
                res.send(messages_state.getError());
            }
            else if (category)
            {
                console.log("hier bin ihc");
                var entry = req.body;
                user.category.addToSet(entry);
                category.update(function (err, results) {
                    console.log(err);
                    console.log(results);
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
        })*/
}
exports.updateEntry = function (req, res) {
    var email = req.payload.email;
    ModelUser.findOneAndUpdate({
        'local.email': email, 'passCategory.passEntry.name': req.body.name
    }, { $set: { "passCategory.$.name": req.body.newname } },
        function (err, doc) {
            if (err || doc == null) {
                console.log("234567");
                console.log(err);
                res.send(messages_state.getError());
            }
            else if (doc) {
                res.send(messages_state.getSuccess());
            }
        });
}
exports.deleteEntry = function (req, res) {
    var email = req.payload.email;

    ModelUser.findOneAndUpdate({ 'local.email': email },
        { $pull: { 'passCategory': { 'name': req.body.name } } },
        function (err, user) {
            if (err)
                res.send(messages_state.getError());
            else if (user)
                res.send(messages_state.getSuccess());
        }
    );

}

//end create update delete entry area

//success and failure area

exports.success = function (req, res) {
    res.send(messages_state.getSuccess());
        
}

exports.failure = function (req, res) {
    res.send(messages_state.getError());

}

// login user
exports.signup = function (req, res) {
    ModelUser.findOne({ 'local.email': req.body.email },
        function (err, user) {
            if (err)
                res.send(messages_state.getError() + "schlecht1");
            else if (user)
                res.send(messages_state.getError() + "schlecht2");
            else
            {
                var userJson = req.body;
                console.log(userJson);
                userJson.joinedDate = "27-01-2000";
                userJson.local["email"] = userJson.email;
                userJson.local["password"] = userJson.password;
                console.log(userJson);
                var user = new ModelUser(userJson);
                console.log(user);
              
                console.log(user);
                user.save(function (err, results) {
                    if (err) 
                    {
                        res.send(messages_state.getError());
                        console.log(err);
                    }
                    else 
                        res.send(messages_state.getSuccess());
                });
            }
        }
    );
}







