const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const TableSchema = new mongoose.Schema({
    number: { type: Number, required: true, unique: true },
    seats: { type: Number, default: 4 },
    available: { type: Boolean, default: true },
    indoor: { type: Boolean, default: true }


});

TableSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Table', TableSchema);