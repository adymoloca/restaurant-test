const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const couponSchema = new mongoose.Schema({

    coupon_name: { type: String, required: true, unique: true },
    coupon_percentage: { type: Boolean, default: true },
    coupon_value: { type: Number, required: true },
    coupon_minOrder: { type: Number, required: true },
    coupon_date_added: { type: Date, default: Date.now(), },
    coupon_last_updated: { type: Date }

});
couponSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Coupon', couponSchema);