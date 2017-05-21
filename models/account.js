var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    energy: Number,
    confidence: Number,
    focus: Number,
    independence: Number
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);