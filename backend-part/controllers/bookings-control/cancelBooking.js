const Booking = require('../../models/booking');
const deleteBooking = async (req, res, next) => {
    const bookingID = req.params.bookingID;

    let booking;
    try {
        booking = await Booking.findById(bookingID);
    } catch (err) {
        return res.status(500).json("Deleting booking failed! ")
    }
    try {
        await booking.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting booking has failed! ", error: err })
    }
    return res.status(200).json({ message: "Booking deleted!", booking: booking })
}

module.exports = deleteBooking