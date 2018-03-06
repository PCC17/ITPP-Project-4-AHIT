'use strict';
var messages_state = require('../messages/state');
var mongoose = require('mongoose');

var ModelUser = mongoose.model('ModelUser');
var jwt = require('jsonwebtoken');  
var config = require('./config.js');

module.exports = function (app) {
    app.post('/authenticate', function (req, res) {
        ModelUser.findOne({
            'local.email': req.body.email
        }, function (err, user) {
            if (err) {
                res.send(messages_state.getError());
            }
            if (!user) {
                res.send(messages_state.getError());
            } else {
                // Check if password matches
                if (user.comparePassword(req.body.password)) {
                    var payload = { id: user.id, email: user.local.email };
                    var token = jwt.sign(payload, config.secret, {
                        expiresIn: 10080 // in seconds
                    });
                    var ret = JSON.parse(JSON.stringify(messages_state.getSuccessJson()));
                    ret['token'] = token;
                    res.send(JSON.stringify(ret));
                } else {
                    res.send(messages_state.getError());
                }
            }
        });
    });
}