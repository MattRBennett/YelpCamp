const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// https://github.com/jaredhanson/passport-local

const UserSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    }
});

// https://github.com/saintedlama/passport-local-mongoose
// Will addon a username, field for password, usernames are unique etc.
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);