const Extra = require('../../models/extra');

const showAllExtras = async (req, res, next) => {
    let extras
    try{
    
     extras = await Extra.find().exec();
    
    if (!extras)
        return res.json({
            message: " No extras found!"
        });
    }catch(err){
        return res.json({message:"Could not show extras.", err:err})
    }
    res.json({
        message: "Extras: ",
        extras: extras
    })

}

module.exports = showAllExtras