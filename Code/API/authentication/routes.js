'use strict';
var messages_state = require('../messages/state');
var mongoose = require('mongoose');

var express = require('express');
var ModelUser = mongoose.model('ModelUser');
var jwt = require('jsonwebtoken');  
var config = require('./config.js');

var authenticate = express.Router();
authenticate.use(function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                console.log("not logged in user tried something");
                return res.send(messages_state.getError());
            } else {
                req.payload = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send(messages_state.getError());
    }
});

module.exports = function (app) {
    app.post('/authenticate', function (req, res) {
        ModelUser.findOne({
            'local.email': req.body.email
        }, function (err, user) {
            if (err) {
                res.send(messages_state.getError());
            }
            else if (!user) {
                res.send(messages_state.getError());
            } else {
                if (user.comparePassword(req.body.password)) {
                    var payload = { id: user.id, email: user.local.email };
                    var token = jwt.sign(payload, config.secret, {
                        expiresIn: 10080 
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

    app.route('/checkToken')
    .get(authenticate, 
    function(req, res)
    {
        res.send(messages_state.getSuccess());
    });
}