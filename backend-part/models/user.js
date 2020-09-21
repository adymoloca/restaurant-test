const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        user_admin: { type: Boolean, default: false },
        loggedIn: { type: Boolean, default: false },
        date_added: { type: Date, default: Date.now() },
        last_updated: { type: Date }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);