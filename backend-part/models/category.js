const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const categorySchema = new mongoose.Schema({

    category_name: { type: String, required: true, unique: true },
    category_description: { type: String },
    category_image: { type: String, default: 'poza' },
    category_date_added: { type: Date, default: Date.now(), },
    category_last_updated: { type: Date }
});

categorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Category', categorySchema);