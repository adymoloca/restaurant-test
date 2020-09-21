const Extra = require('../../models/extra');

const updateExtra = async (req, res, next) => {
    const extraID = req.params.extraID;
    const {  extra_name, extra_price, extra_category } = req.body
    let extra;
    try {
        extra = await Extra.findById(extraID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the extra. ", err: err })
    }

    extra.extra_name = extra_name;
    extra.extra_price = extra_price;
    extra.extra_category = extra_category
    extra.extra_last_updated = Date.now();



    try {
        await extra.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the extra. ", err: err })
    }
    return res.status(200).json({ message: "Extra updated.", extra: extra })
}

module.exports = updateExtra   