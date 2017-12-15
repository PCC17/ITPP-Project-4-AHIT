'use strict';
module.exports = function (app) {
    var controller = require('./controller');
    // IOT Routes
    app.route('/debug/createSampleUser')
        .post(controller.debug_createSampleUser),
    app.route('/debug/insertAllCountries')
            .get(controller.debug_insertAllCountries);
    app.route('/login')
            .get(controller.login);
};