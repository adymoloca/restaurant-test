const ExtraCategory = require('../../models/extra_category');

const showAllExtraCategories = async (req, res, next) => {
    let extraCategories
    try{
    
     extraCategories = await ExtraCategory.find().exec();
    
    if (!extraCategories)
        return res.json({
            message: " No extras categories  found!"
        });
    }catch(err){
        return res.json({message:"Could not show extras categories.", err:err})
    }
    res.json({
        message: "Extra categories: ",
        extraCategories: extraCategories
    })

}

module.exports = showAllExtraCategories