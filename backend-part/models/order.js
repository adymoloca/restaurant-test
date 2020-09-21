const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    products:
        [{
            product_name: { type: String, },
            product_id: { type: String, required: true },
            product_price: { type: Number, require: true },
            product_quantity: { type: Number, default: 1 },
            product_extra:
                [{
                    name: { type: String },
                    value: { type: Number }
                }],
            product_freeExtra: { type: String, default: 'cheese' }
        }],
    coupon_name: { type: String },
    order_total: { type: Number, required: true },
    payment_method:{type:String, required:true, default:'ramburs'},
    clientID: { type: String, required: true },
    order_date_added: { type: Date, default: Date.now() },

});

module.exports = mongoose.model('Order', orderSchema);