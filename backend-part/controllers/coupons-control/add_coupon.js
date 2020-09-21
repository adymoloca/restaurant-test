const Coupon = require('../../models/coupons');

const createCoupon = async (req, res, next) => {

    const {

        coupon_name,
        coupon_percentage,
        coupon_value,
        coupon_minOrder,


    } = req.body

    let createdCoupon;

    try {

        createdCoupon = new Coupon({

            coupon_name,
            coupon_percentage,
            coupon_value,
            coupon_minOrder,
            coupon_last_updated: Date.now()
        })

        await createdCoupon.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding coupon has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Coupon added!',
        coupon: createdCoupon
    });
};

exports.createCoupon = createCoupon;