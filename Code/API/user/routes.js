'use strict';
var messages_state = require('../messages/state');
module.exports = function (app, passport) {
    var controller = require('./controller');
    // IOT Routes
    //restricted area
    app.route('/debug/restricted')
        .get(isLoggedIn, controller.debug_restricted),
    app.route('/debug/createSampleUser')
        .post(controller.debug_createSampleUser),
    app.route('/debug/insertAllCountries')
            .get(isLoggedIn, controller.debug_insertAllCountries);


    // signup login logout
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    app.post('/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            if (err) {
                return res.send(messages_state.getError());
            }
            // Redirect if it fails
            if (!user) {
                return res.send(messages_state.getError());
            }
            req.logIn(user, function (err) {
                if (err)
                {
                    return res.send(messages_state.getError());
                }
                return res.send(messages_state.getSuccess());
            });
        })(req, res, next);
    });


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