const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const clientSchema = new mongoose.Schema({
    client_name: { type: String, required: true },
    client_numberOfOrders: { type: Number, default: 0 },
    client_email: { type: String, unique: true, required: true },
    client_password: { type: String, required: true },
    client_phone: { type: String },
    client_adress: { type: String, required: true },
    client_loggedIn: { type: Boolean, default:false },
    client_date_added: { type: Date, default: Date.now(), },
    client_last_updated: { type: Date }
});

clientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Client', clientSchema);