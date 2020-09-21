const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
        UID: { type: Number, required: true, unique: true },
        adress: {
                street: { type: String, required: true },
                nr: { type: Number, required: true },
                city: { type: String, required: true },
                country: { type: String, required: true }
        },
        name: { type: String, required: true }
});

module.exports = mongoose.model('Company', companySchema);