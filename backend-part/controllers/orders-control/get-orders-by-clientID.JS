const Order = require('../../models/order');

const showOrdersByClient = async (req, res, next) => {
    const clientID = req.params.clientID

    let orders
    try {

        orders = await Order.find().exec();
        if (!orders)
            return res.json({
                message: " No orders found!"
            });
        orders = orders.filter(p => {
            return p.clientID === clientID;
        })
        if (!orders)
            return res.json({
                message: " No orders found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show orders.", err: err })
    }
    res.json({
        message: "Your orders: ",
        orders: orders
    })

}

module.exports = showOrdersByClient