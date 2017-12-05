var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schema_user = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    joined: { type: Date, default: Date.now },
    birthDate: { type: Date, required: true },
    countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
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



// the schema is useless so far
// we need to create a model using it
var ModelUser = mongoose.model('ModelUser', schema_user);

// make this available to our users in our Node applications
module.exports = ModelUser;