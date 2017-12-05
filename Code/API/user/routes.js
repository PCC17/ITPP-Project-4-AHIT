'use strict';
module.exports = function (app) {
    var controller = require('./controller');
    // IOT Routes
    app.route('/iot/all/status/:state')
        .get(controller.list_all_iot_devices_with_state)
        .put(controller.set_state_of_all_iot_devices);
};