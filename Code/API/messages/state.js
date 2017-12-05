var succesMessage = { status: "success", servertime: Date.now() };
var errorMessage = { status: "error", servertime: Date.now() };

exports.getSuccess = function () {
    return JSON.stringify(succesMessage)
}

exports.getError = function () {
    return JSON.stringify(errorMessage);
}