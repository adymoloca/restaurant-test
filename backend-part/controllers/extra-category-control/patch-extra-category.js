const ExtraCategory = require('../../models/extra_category');

const updateExtraCategory = async (req, res, next) => {
    const extraCategoryID = req.params.extraCategoryID;
    const {  extra_category_name } = req.body
    let extraCategory;
    try {
        extraCategory = await ExtraCategory.findById(extraCategoryID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the extras category. ", err: err })
    }

    extraCategory.extra_category_name = extra_category_name;
    extraCategory.extraCategory_last_updated = Date.now();



    try {
        await extraCategory.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the extras category. ", err: err })
    }
    return res.status(200).json({ message: "Extras category updated.", extraCategory: extraCategory })
}

module.exports = updateExtraCategory   