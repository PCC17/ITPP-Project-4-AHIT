var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schema_country = new Schema({
    name: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
});



// the schema is useless so far
// we need to create a model using it
var ModelCountry = mongoose.model('ModelCountry', schema_country);

// make this available to our users in our Node applications
module.exports = ModelCountry;