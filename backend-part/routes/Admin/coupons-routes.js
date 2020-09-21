const express = require('express');
const { createCoupon } = require('../../controllers/coupons-control/add_coupon');
const deleteCoupon = require('../../controllers/coupons-control/delete_coupon');
const showAllCoupons = require('../../controllers/coupons-control/get_coupons');
const updateCoupon = require('../../controllers/coupons-control/patch_coupon');


const router = express.Router();

router.post('/addCoupon', createCoupon);
router.patch('/:couponID',updateCoupon)
router.delete('/:couponID', deleteCoupon);
router.get('/',showAllCoupons)


module.exports = router;