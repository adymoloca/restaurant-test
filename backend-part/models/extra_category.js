const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const extra_categorySchema = new mongoose.Schema({

    extra_category_name: { type: String, required: true, unique: true },
    extraCategory_date_added: { type: Date, default: Date.now(), },
    extraCategory_last_updated: { type: Date }
});
extra_categorySchema.plugin(uniqueValidator);


module.exports = mongoose.model('ExtraCategory', extra_categorySchema);