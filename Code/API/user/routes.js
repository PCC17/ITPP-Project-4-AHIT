'use strict';
var messages_state = require('../messages/state');
var controller = require('./controller');
//var bcrypt = require('bcrypt-nodejs');


module.exports = function (app, passport) {
    // IOT Routes
    //restricted area
    app.route('/debug/restricted')
        .get(isLoggedIn, controller.debug_restricted);
    app.route('/debug/createSampleUser')
        .get(controller.debug_createSampleUser);
    app.route('/debug/insertAllCountries')
        .get(isLoggedIn, controller.debug_insertAllCountries);
    app.route('/login')
        .post(passport.authenticate('local-login'));

    // signup login logout
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signin', // redirect back to the signup page if there is an error
    }));
    /*
    app.post('/register')
        .post(controller.)*/
  /*  app.post('/login', passport.authenticate('local-login', {
        
    }));*/

   


    app.route('/logout').get(
        function (req, res) {
            req.logout();
            res.send(messages_state.getSuccess());
        }
    );
    //----------------
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}