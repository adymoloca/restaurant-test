const Coupon = require('../../models/coupons');

const updateCoupon = async (req, res, next) => {
    const couponID = req.params.couponID;
    const { coupon_name,  coupon_value,  coupon_minOrder, coupon_percentage } = req.body
    let coupon;
    try {
        coupon = await Coupon.findById(couponID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the coupon. ", err: err })
    }

    coupon.coupon_name = coupon_name;
    coupon.coupon_value = coupon_value;
    coupon.coupon_minOrder = coupon_minOrder;
    coupon.coupon_percentage = coupon_percentage;
    coupon.coupon_last_updated = Date.now();



    try {
        await coupon.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the coupon. ", err: err })
    }
    return res.status(200).json({ message: "Coupon updated.", coupon: coupon })
}

module.exports = updateCoupon   