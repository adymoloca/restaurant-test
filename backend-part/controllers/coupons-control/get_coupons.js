const Coupon = require('../../models/coupons');

const showAllCoupons = async (req, res, next) => {
    let coupons
    try{
    
     coupons = await Coupon.find().exec();
    
    if (!coupons)
        return res.json({
            message: " No coupons found!"
        });
    }catch(err){
        return res.json({message:"Could not show coupons.", err:err})
    }
    res.json({
        message: "Coupons: ",
        coupons: coupons
    })

}

module.exports = showAllCoupons