'use strict';
module.exports = function (app) {
    var controller = require('./controller');
    // IOT Routes
    app.route('/debug/createSampleUser')
        .post(controller.debug_createSampleUser),
    app.route('/debug/createSampleCountry')
        .post(controller.debug_createSampleCountry);;
};