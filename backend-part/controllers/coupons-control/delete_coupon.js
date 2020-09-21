
const Coupon = require('../../models/coupons');
const deleteCoupon= async (req, res, next) => {
    const couponID = req.params.couponID;

    let coupon;
    try {
        coupon = await Coupon.findById(couponID);
    } catch (err) {
        return res.status(500).json("Deleting coupon failed! ")
    }

    try {
        await coupon.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting coupon has failed! ", error: err })
    }
    return res.status(200).json({ message: "Coupon deleted!", coupon: coupon })
}

module.exports = deleteCoupon