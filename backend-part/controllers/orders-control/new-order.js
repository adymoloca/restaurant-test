const Client = require('../../models/client');
const Order = require('../../models/order')
const createOrder = async (req, res, next) => {
    const clientID = req.params.clientID
    
    const products = req.body.products
    const { coupon_name, order_total, payment_method } = req.body

    let createdOrder, client

    try {

        createdOrder = new Order({
            products,
            coupon_name,
            order_total,
            clientID,
            payment_method

        })
        await createdOrder.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding order has failed",
            error: err
        })
    }
    try {
        client = await Client.findById(clientID);
        client.client_numberOfOrders++
        await client.save();
    } catch (err) {
        return res.status(500).json({ message: "Order failed, invalid client ID! ", err: err })
    }

    

    res.status(201).json({
        message: 'Order created !',
        order: createdOrder
    });
};

exports.createOrder = createOrder;