var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');
var Cuenta = new Schema({
    username: String,
    cumple: Date
})

Cuenta.plugin(passportLocalMongoose)

module.exports = mongoose.model('Cuenta', Cuenta)
