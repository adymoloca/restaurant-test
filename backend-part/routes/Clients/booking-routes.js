const express = require('express');
const acceptBooking = require('../../controllers/bookings-control/acceptBooking');
const deleteBooking = require('../../controllers/bookings-control/cancelBooking');
const showAllBookings = require('../../controllers/bookings-control/getAll');
const createBooking = require('../../controllers/bookings-control/newBooking');

const router = express.Router();

router.get('/',showAllBookings)
router.post('/:clientID',createBooking)
router.delete('/:bookingID',deleteBooking)
router.patch('/:bookingID',acceptBooking)

module.exports = router;