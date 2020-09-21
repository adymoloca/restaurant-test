const Booking = require('../../models/booking');

const showAllBookings = async (req, res, next) => {
    let bookings
    try{
    
     bookings = await Booking.find().exec();
    
    if (!bookings)
        return res.json({
            message: " No bookings found!"
        });
    }catch(err){
        return res.json({message:"Could not show bookings.", err:err})
    }
    res.json({
        message: "Bookings: ",
        bookings: bookings
    })

}

module.exports = showAllBookings