var succesMessage = { status: "success", servertime: Date.now() };
var errorMessage = { status: "error", servertime: Date.now() };

exports.getSuccess = function () {
    return JSON.stringify(succesMessage)
}

exports.getError = function (msg) {
    var a = JSON.parse(JSON.stringify(errorMessage));
    a["errorMessage"] = msg;
    return JSON.stringify(errorMessage);
}


exports.getSuccessJson = function () {
    return succesMessage;
}
