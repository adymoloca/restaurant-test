const Booking = require('../../models/booking');
const acceptBooking = async (req, res, next) => {
    const bookingID = req.params.bookingID;

    let booking;
    try {
        booking = await Booking.findById(bookingID);
        booking.accepted = true
        await booking.save()
    } catch (err) {
         res.status(500).json({message:"Accepting booking failed! "})
        console.log(err)
    }
    console.log(req.session)
    return res.status(200).json({ message: "Booking accepted!", booking: booking })
}

module.exports = acceptBooking