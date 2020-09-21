const Category = require('../../models/category');
const updateCategory = async (req, res, next) => {
    const categoryID = req.params.categoryID;
    const { category_name,  category_description,  category_image } = req.body
    let category;
    try {
        category = await Category.findById(categoryID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the category. ", err: err })
    }

    category.category_name = category_name
    category.category_description = category_description;
    category.category_image = category_image;
    category.category_last_updated = Date.now();




    try {
        await category.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the category. ", err: err })
    }
    return res.status(200).json({ message: "Category updated.", category: category })
}

module.exports = updateCategory