const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const extraSchema = new mongoose.Schema({

    extra_category:{ type: String, required: true },
    extra_name: { type: String, required: true, unique: true },
    extra_price: { type: Number, required: true },
    extra_date_added: { type: Date, default: Date.now(), },
    extra_last_updated: { type: Date }


});
extraSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Extra', extraSchema);