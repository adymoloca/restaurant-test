
const Category = require('../../models/category');
const deleteCategory = async (req, res, next) => {
    const categoryID = req.params.categoryID;

    let category;
    try {
        category = await Category.findById(categoryID);
    } catch (err) {
        return res.status(500).json("Deleting category failed! ")
    }

    try {
        await category.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting category has failed! ", error: err })
    }
    return res.status(200).json({ message: "Category deleted.", category: category })
}

module.exports = deleteCategory