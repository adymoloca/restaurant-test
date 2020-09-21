const ExtraCategory = require('../../models/extra_category')

const deleteExtraCategory= async (req, res, next) => {
    const extraCategoryID = req.params.extraCategoryID;

    let exxtraCategory;
    try {
        exxtraCategory = await ExtraCategory.findById(extraCategoryID);
    } catch (err) {
        return res.status(500).json("Deleting extra category failed! ")
    }

    try {
        await exxtraCategory.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting extra category has failed! ", error: err }),
        console.log(err)
    }
    return res.status(200).json({ message: "Extra category deleted!", extra_category: exxtraCategory })
}

module.exports = deleteExtraCategory