const Category = require('../../models/category');

const showAllCategories = async (req, res, next) => {
    let categories
    try{
    
     categories = await Category.find().exec();
    
    if (!categories)
        return res.json({
            message: " No categories found!"
        });
    }catch(err){
        return res.json({message:"Could not show categories.", err:err})
    }
    res.json({
        message: "Categories: ",
        categories: categories
    })

}

module.exports = showAllCategories