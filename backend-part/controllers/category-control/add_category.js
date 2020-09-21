const Category = require('../../models/category');

const createCategory = async (req, res, next) => {

    const {

        category_name,
        category_description,
        category_image,

    } = req.body

    let createdCategory;

    try {

        createdCategory = new Category({

            category_name,
            category_description,
            category_image,
            category_last_updated: Date.now()
        })

        await createdCategory.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding category has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Category added!',
        category: createdCategory
    });
};

exports.createCategory = createCategory;