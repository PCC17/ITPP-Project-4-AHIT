var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

// create a schema
var schema_user = new Schema({
    local: {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },

    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    joined: { type: Date, default: Date.now },
    birthDate: { type: Date, required: true },
    countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'ModelCountry' },
    passCategory: [{
        name: { type: String, required: true },
        order: { type: String, required: true, unique: true },
        passEntry: [{
            name: { type: String, required: true },
            order: { type: String, required: true, unique: true },
            link: { type: String, required: true },
            image: { type: String, required: true },
            username: { type: String, required: true },
            password: { type: String, required: true },
            notes: { type: String, required: true },
            customFields: [{
                key: { type: String, required: true },
                value: { type: String, required: true },
            }],
            isfavourite: { type: Boolean, default: false },
        }]
    }]
});


schema_user.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
schema_user.methods.validPassword = function (password) {
    return password == this.local.password;
};


var ModelUser = mongoose.model('ModelUser', schema_user);

// make this available to our users in our Node applications
module.exports = ModelUser;