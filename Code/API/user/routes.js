'use strict';
var messages_state = require('../messages/state');
var controller = require('./controller');
//var bcrypt = require('bcrypt-nodejs');


module.exports = function (app, passport) {
    // IOT Routes

    //restricted area

    //debug area
    app.route('/debug/restricted')
        .get(isLoggedIn, controller.debug_restricted);
    app.route('/debug/createSampleUser')
        .get(controller.debug_createSampleUser);
    app.route('/debug/insertAllCountries')
        .get(isLoggedIn, controller.debug_insertAllCountries);
    //end debug area

    //category and area

    app.route('/category')
        .post(isLoggedIn, controller.createCategory);
    app.route('/category')
        .put(isLoggedIn, controller.updateCategory);
    app.route('/category')
        .delete(isLoggedIn, controller.deleteCategory);


    //end category and area

    //end restricted area

    //success and failure routes
    app.route('/failure')
        .get(controller.failure);
    app.route('/success')
        .get(controller.success);
    //end success and failure routes


    //login signup logout area
    app.route('/login')
        .post(passport.authenticate('local-login', {
            successRedirect: '/success',
            failureRedirect: '/failure',
        }));    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/success',
        failureRedirect: '/failure', 
    }));

    app.route('/logout').get(
        function (req, res) {
            req.logout();
            res.send(messages_state.getSuccess());
        }
    );
    //end login signup logout area
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    res.status(401);
    res.send('You are not authorized!');
}