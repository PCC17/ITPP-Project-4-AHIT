var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var schema_pass_entry = new Schema({
    name: { type: String, required: true },
    order: { type: String, required: true },
    link: { type: String, required: false },
    image: { type: String, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
    notes: { type: String, required: false },
    customFields: [{
        key: { type: String, required: false },
        value: { type: String, required: false },
    }],
    isfavourite: { type: Boolean, default: false }
});

var schema_pass_category = new Schema( {
    name: { type: String, required: true },
    order: { type: String, required: true},
    passEntry: [schema_pass_entry]
});

// create a schema
var schema_user = new Schema({
    local: {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },

    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    joined: { type: Date, default: Date.now },
    birthDate: { type: Date, required: true },
    countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'ModelCountry' },
    passCategory: [schema_pass_category]
});


schema_user.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
schema_user.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};


var ModelUser = mongoose.model('ModelUser', schema_user);
var ModelPassCategory = mongoose.model('ModelPassCategory', schema_pass_category);
var ModelPassEntry = mongoose.model('ModelPassEntry', schema_pass_entry);
// make this available to our users in our Node applications
module.exports += ModelUser;
module.exports += ModelPassCategory;
module.exports += ModelPassEntry;
