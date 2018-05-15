'use strict';
var messages_state = require('../messages/state');
var controller = require('./controller');
var express = require('express');
var jwt = require('jsonwebtoken');
var config = require('../authentication/config.js');
//var bcrypt = require('bcrypt-nodejs');


module.exports = function (app, passport) {
    // IOT Routes

    app.route('/user')
        .get(authenticate, controller.getUser);
    app.route('/countries')
        .get(authenticate, controller.getCountries);
    //restricted area
    //debug area
    app.route('/debug/restricted')
        .get(authenticate, controller.debug_restricted);
    app.route('/debug/createSampleUser')
        .get( controller.debug_createSampleUser);
    app.route('/debug/insertAllCountries')
        .get(authenticate, controller.debug_insertAllCountries);
    //end debug area



    //category area
    app.route('/categories')
        .get(authenticate, controller.getCategories);
    app.route('/category')
        .post(authenticate, controller.createCategory);
    app.route('/category')
        .put(authenticate, controller.updateCategory);
    app.route('/category')
        .delete(authenticate, controller.deleteCategory);
    //end category area

    //entry area
    app.route('/entries')
        .get(authenticate, controller.getEntries);
    app.route('/:category/entries')
        .get(authenticate, controller.getForCategoryEntries);
    app.route('/:category/entry')
        .post(authenticate, controller.createEntry);
    app.route('/:category/entry')
        .put(authenticate, controller.updateEntry);
    app.route('/:category/entry')
        .delete(authenticate, controller.deleteEntry);
    //end entry area

    //export / import
    app.route('/export')
        .get(authenticate, controller.export);
    app.route('/import')
        .get(authenticate, controller.import);
    //end export / import

    //end restricted area

    //success and failure routes
    app.route('/failure')
        .get(controller.failure);
    app.route('/success')
        .get(controller.success);
    //end success and failure routes

    app.route('/signup')
        .post(controller.signup);

    app.route('/logout').get(
        function (req, res) {
            controller.logout();
            res.send(messages_state.getSuccess());
        }
    );
    //end login signup logout area
};

var authenticate = express.Router();
authenticate.use(function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                console.log("not logged in user tried something");
                return res.send(messages_state.getError());
            } else {
                // if everything is good, save to request for use in other routes
                req.payload = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send(messages_state.getError());
    }
});

/*
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    res.status(401);
    res.send('You are not authorized!');
}*/
