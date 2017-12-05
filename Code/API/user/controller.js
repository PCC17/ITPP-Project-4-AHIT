'use strict';


var mongoose = require('mongoose'), IOT_DeviceCollection = mongoose.model('ModelUser');


//route /iot/all/status/:state
exports.standard = function (req, res) {
    IOT_DeviceCollection.find({ online: req.params.state }, function (err, task) {
        if (err)
            res.send(messages.getError());
        else
            res.send(task);
    });
}






