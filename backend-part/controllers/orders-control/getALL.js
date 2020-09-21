const Order = require('../../models/order');

const showAllOrders = async (req, res, next) => {
    let orders
    try{
    
     orders = await Order.find().exec();
    
    if (!orders)
        return res.json({
            message: " No orders found!"
        });
    }catch(err){
        return res.json({message:"Could not show orders.", err:err})
    }
    res.json({
        message: "Orders: ",
        orders: orders
    })

}

module.exports = showAllOrders