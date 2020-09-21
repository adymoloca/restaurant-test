const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    seats: { type: Number, required: true },
    indoor: { type: Boolean, required: true },
    time: { type: Date, required: true },
    accepted: { type: Boolean, default: false },
    clientID: { type: String }
});

module.exports = mongoose.model('Booking', BookingSchema);