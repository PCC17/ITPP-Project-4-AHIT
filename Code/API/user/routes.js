'use strict';
module.exports = function (app) {
    var controller = require('./controller');
    // IOT Routes
    app.route('/debug/createSampleUser')
        .post(controller.debug_createSampleUser),
    app.route('/debug/insertAllCountries')
            .get(controller.debug_insertAllCountries);


    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
};