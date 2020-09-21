const ExtraCategory = require('../../models/extra_category')




const create_ExtraCategory = async (req, res, next) => {

    const {

        extra_category_name
        

    } = req.body
    
    let created_extraCategory;

    try {

        created_extraCategory = new ExtraCategory({

            extra_category_name,
            extraCategory_last_updated: Date.now()
        })

        await created_extraCategory.save();

    } catch (err) {
       return res.status(500).json({
            message: "Adding extra category has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Extra category added!',
        extraCategory: created_extraCategory
    });
};

exports.create_ExtraCategory = create_ExtraCategory;