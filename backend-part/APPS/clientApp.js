const express = require('express')

const clientApp = express();

const clients_routes = require('../routes/Clients/client-routes')
const orders_routes = require('../routes/Clients/order-routes')
const bookings_routes = require('../routes/Clients/booking-routes')

clientApp.use('/', clients_routes)
clientApp.use('/orders', orders_routes)
clientApp.use('/bookings', bookings_routes)

module.exports = clientApp