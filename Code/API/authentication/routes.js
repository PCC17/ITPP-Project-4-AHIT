'use strict';
var messages_state = require('../messages/state');
var User = require('../user/model.js');  
var jwt = require('jsonwebtoken');  
var config = require('./config.js');

module.exports = function (app) {
    app.post('/authenticate', function (req,res){ 
        User.findOne({
            'local.email': req.body.email
        }, function(err, user) {
                if (err) throw err;
                if (!user) {
                    //res.send(messages_state.getError());
                    res.send(req.body.email);
                } else {
                // Check if password matches
                    if(user.comparePassword(req.body.password)) {
                        var payload = {id: user.id, email: user.local.email};
                        var token = jwt.sign(payload, config.secret, {
                            expiresIn: 10080 // in seconds
                        });
                        var ret = messages_state.getSuccessJson();
                        ret['token'] = token;
                        res.send(JSON.stringify(ret));
                        } else {
                            res.send(messages_state.getError());
                        }
                    }
                });
            }
        );
}