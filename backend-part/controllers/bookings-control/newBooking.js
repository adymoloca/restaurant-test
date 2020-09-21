const Booking = require('../../models/booking');
const createBooking = async (req, res, next) => {
    
    const clientID = req.params.clientID
    const { seats, indoor, time } = req.body

    let createdBooking;

    try {
        createdBooking = new Booking({
            time,
            seats,
            indoor,
            clientID

        })
        await createdBooking.save();
    } catch (err) {
        res.status(500).json({
            message: "Adding booking failed",
            error: err
        })
    }

    res.status(201).json({
        message: 'Booking added !',
        Booking: createdBooking
    });
};

module.exports = createBooking;