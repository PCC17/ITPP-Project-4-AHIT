'use strict';

var messages_state = require('../messages/state');
var sampleData = require('../data/sample');

var mongoose = require('mongoose');
var ModelUser = mongoose.model('ModelUser');
var ModelPassCategory = mongoose.model('ModelUser');
var ModelPassEntry = mongoose.model('ModelUser');
var ModelCountry = mongoose.model('ModelCountry');

//debug area

exports.getUser= function (req, res) {
    var email = req.payload.email;
    ModelUser.findOne({ 'local.email': email }, function (err, user) {
      console.log(err);
      var a = {
        username:  user.username,
        email:    user.email,
        firstname:  user.firstname,
        lastname: user.lastname
      };
      console.log(JSON.stringify(a));
      res.send(JSON.stringify(a));
    });

}

exports.getCountries= function (req, res) {
    ModelUser.findAll({}, function (err, countries) {
      res.send(countries);
    });
}

exports.debug_restricted = function (req, res) {
    res.send("Secret Area");
}

exports.debug_insertAllCountries = function (req, res) {
    ModelCountry.remove({});
    var arr = sampleData.getCountries();
    ModelCountry.insertMany(arr, function (err, task) {
        if (err)
        {
            res.send(err);
            console.log(err);
        }
        else
            res.send(messages_state.getSuccess());
    });
}
exports.debug_createSampleUser = function (req, res) {
    var user = new ModelUser(sampleData.getUser());
    user.save(function (err, results) {
        if (err) {
            console.log(err);
            res.send(messages_state.getError(err));
        }
        else {
            res.send(messages_state.getSuccess());
        }
    });
}

//end debug area

//color area
exports.debug_restricted = function (req, res) {
    res.send("Secret Area");
}

//end color area


//export import area
exports.import = function (req, res) {
    res.send("Secret Area");
}
exports.export = function (req, res) {
  var email = req.payload.email;
  ModelUser.findOne({ 'local.email': email }, function (err, user) {
    console.log(JSON.stringify(user.passCategory));
    var str = "";
    for (var i = 0; i < user.passCategory.length; i++) {
      for (var j = 0; j < user.passCategory[i].passEntry.length; j++) {
        str += user.passCategory[i].name + ";" + user.passCategory[i].passEntry[j].name  +
         ";" + user.passCategory[i].passEntry[j].username +
         ";" + user.passCategory[i].passEntry[j].password + ";" + user.passCategory[i].passEntry[j].link + "\n";
      }
    }

    res.send(str);
  });
}

//end export import area

//create update delete category area

exports.createCategory = function (req, res) {
    var email = req.payload.email;
    ModelUser.findOne({ 'local.email': email }, function (err, user) {
        if (err) res.send(messages_state.getError(err));
        var category = req.body;
        var is_used = false;
        user.passCategory.forEach(function (entry) {
            if (entry.name == category.name)
            {
                is_used = true;
                return;
            }
        });
        if (!is_used) {
            user.passCategory.addToSet(category);
            user.save(function (err, results) {
                if (err) {
                    console.log(err);
                    res.send(messages_state.getError(err));
                }
                else {
                    res.send(messages_state.getSuccess());
                }
            });
        }
        else
        {
            res.send(messages_state.getError(err));
        }
    });
}
exports.updateCategory = function (req, res) {
  console.log(req);
    var email = req.payload.email;
    ModelUser.findOne({ 'local.email': email }, function (err, user) {
        if (err)
            res.send(messages_state.getError(err));
        var category = req.body;
        var is_used = false;
        user.passCategory.forEach(function (entry) {
            if (entry.name == req.body.newname) {
                is_used = true;
                return;
            }
        });
        if (!is_used && req.body.newname && req.body.neworder) {
            ModelUser.findOneAndUpdate({
                'local.email': email, 'passCategory.name': req.body.name
            }, { $set: { "passCategory.$.name": req.body.newname, "passCategory.$.order": req.body.neworder } },
                function (err, doc) {
                    if (err || doc == null) {
                        res.send(messages_state.getError(err));
                    }
                    else if (doc) {
                        res.send(messages_state.getSuccess());
                    }
            });
        }
        else if (req.body.neworder){
            ModelUser.findOneAndUpdate({
                'local.email': email, 'passCategory.name': req.body.name
            }, { $set: {"passCategory.$.order": req.body.neworder } },
                function (err, doc) {
                    if (err || doc == null) {
                        res.send(messages_state.getError(err));
                    }
                    else if (doc) {
                        res.send(messages_state.getSuccess());
                    }
                });
        }
        else if (req.body.newname) {
            ModelUser.findOneAndUpdate({
                'local.email': email, 'passCategory.name': req.body.name
            }, { $set: { "passCategory.$.name": req.body.newname } },
                function (err, doc) {
                    if (err || doc == null) {
                        res.send(messages_state.getError(err));
                    }
                    else if (doc) {
                        res.send(messages_state.getSuccess());
                    }
                });
        }
        else {
            res.send(messages_state.getError(err));
        }
    });
 }

exports.deleteCategory = function (req, res) {
    var email = req.payload.email;

    ModelUser.findOneAndUpdate({ 'local.email': email },
        { $pull: { 'passCategory': { 'name': req.body.name } } },
        function (err, user) {
            if (err)
                res.send(messages_state.getError(err));
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
                res.send(messages_state.getError(err));
            else if (user) {
                res.send(JSON.stringify(user.passCategory));
            }
        }
    );

}

//end create update delete category area

//create update delete entry area
exports.updateEntry = function (req, res) {
    var email = req.payload.email;
    ModelUser.findOneAndUpdate({
        'local.email': email, 'passCategory.passEntry.name': req.body.name
    }, { $set: { "passCategory.$.name": req.body.newname } },
        function (err, doc) {
            if (err || doc == null) {
                console.log("234567");
                console.log(err);
                res.send(messages_state.getError(err));
            }
            else if (doc) {
                res.send(messages_state.getSuccess());
            }
        });
}
exports.getForCategoryEntries = function (req, res) {
    var email = req.payload.email;
    ModelUser.findOne({
        'local.email': email
    },
        function (err, user) {
            if (err || user == null) {
                console.log(err);
                res.send(messages_state.getError(err));
            }
            else {
                for (var i = 0; i < user.passCategory.length; i++) {
                    if (user.passCategory[i].name == req.params.category) {
                        res.send(user.passCategory[i].passEntry);
                    }
                }
            }
        });
}
exports.getEntries = function (req, res) {
    var email = req.payload.email;

    ModelUser.findOne({ 'local.email': email },

        function (err, user) {
            if (err)
                res.send(messages_state.getError(err));
            else if (user) {
                console.log(JSON.stringify(user.passCategory.passEntry));
                res.send(JSON.stringify(user.passCategory));
            }
        }
    );
}
exports.createEntry = function (req, res) {
  console.log("helloo" + JSON.stringify(req.body));
    var email = req.payload.email;
   ModelUser.findOne({ 'local.email': email },
       function (err, user) {

           if (err) {
               console.log(err);
               res.send(messages_state.getError(err));
           }
           else if (user) {
               var arrayLength = user.passCategory.length;
               var exists = false;
               var index = -1;
               for (var i = 0; i < arrayLength; i++) {
                   if (user.passCategory[i].name == req.params.category) {
                       exists = true;
                       index = i;
                   }
               }
               if (exists) {
                   user.passCategory[index].passEntry.addToSet(req.body);
                   user.save(
                       function (err, results) {
                           if (err) {
                               console.log(err);
                               res.send(messages_state.getError(err));
                           }
                           else if (results) {
                               console.log(results);
                               res.send(messages_state.getSuccess());
                           }
                       });
               }
               else {
                   res.send(messages_state.getError(err));
               }
           }

       });
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
                res.send(messages_state.getError(err));
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
                res.send(messages_state.getError(err));
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
    res.send(messages_state.getError(err));

}

// login user
exports.signup = function (req, res) {
    ModelUser.findOne({ 'local.email': req.body.email },
        function (err, user) {
            if (err)
                res.send(messages_state.getError(err));
            else if (user)
                res.send(messages_state.getError(err));
            else
            {
                var userJson = req.body;

                console.log(userJson);
                userJson.joinedDate = "27-01-2000";
                var lo = { "email": userJson.email, "password": userJson.password };

                userJson["local"] = lo;
                console.log(userJson);
                var user = new ModelUser(userJson);
                user.local.password = user.generateHash(user.local.password);
                console.log(user);

                console.log(user);
                user.save(function (err, results) {
                    if (err)
                    {
                        res.send(messages_state.getError(err));
                        console.log(err);
                    }
                    else
                        res.send(messages_state.getSuccess());
                });
            }
        }
    );
}
