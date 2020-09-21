const Company = require('../../models/company');

const showAllCompanies = async (req, res, next) => {
    let company
    try{
    
     company = await Company.find().exec();
    
    if (!company)
        return res.json({
            message: " No company found!"
        });
    }catch(err){
        return res.json({message:"Could not get company.", err:err})
    }
    res.json({
        message: "Company: ",
        company: company
    })

}

module.exports = showAllCompanies